---
title: "Magento layout customization: leveraging xsi:type='helper' to pass dynamic data to blocks"
date: 2023-01-26
authors:
  - piotr-kwiecinski
tags:
  - magento
draft: true
summary: Exploring lesser-known yet very powerful method of passing dynamic data to a block.
---

## Overview

When defining a block in `layout.xml` you can pass additional arguments which will be passed to a constructor.

Each argument definition requires a type by `xsi:type` attribute.

The most common are `string`, `object`, `boolean`, `number` and `array`.

Let's define a layout for a page to display the content of a CMS block the application.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
  <body>
    <referenceContainer name="main.content">
      <block class="Magento\Cms\Block\BlockByIdentifier"
             name="empty_cart_cms_content">
        <arguments>
          <argument name="identifier" xsi:type="string">
            my_custom_block
          </argument>
        </arguments>
      </block>
    </referenceContainer>
  </body>
</page>
```

We have defined an identifier `my_custom_block` as string. Most often passing arguments as static values is good enough.

However, it's not always the case. Sometimes we need to pass arguments that are an outcome of a computation.

This is where helper type shines.

## Basic usage of helper type

Imagine you're tasked to create a display area on a page which shows a CMS block on an empty cart page.

Additionally, client wants to be able to choose which block is displayed via admin panel.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="main.content">
            <block class="Magento\Cms\Block\BlockByIdentifier"
                   name="empty_cart_cms_content">
                <arguments>
                    <argument name="identifier"
                              xsi:type="helper"
                              helper="Codemanufacture\Checkout\Model\Cart::getEmptyBlockIdentifier" />
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>
```

```php
use Magento\Framework\App\Config\ScopeConfigInterface;
class Cart
{
    private ScopeConfigInterface $scopeConfig;

    public function __construct(
        ScopeConfigInterface $scopeConfig;
    ) {
        $this->scopeConfig = $scopeConfig;
    }

    /**
     * Returns identifier of an empty cart block
     *
     * @return string
     */
    public function getEmptyBlockIdentifier(): string
    {
        return (string) $this->scopeConfig->getValue('codemanufacture_checkout/cart/empty_cart_block')
    }
}
```

## What can we learn from XML Schema Definition?

All argument definitions come from `etc/elements.xsd` located in `magento/framework/Layout/View`.

Here is how the `helper` type is defined:

```xml
<xs:complexType name="helper" mixed="true">
    <xs:complexContent>
        <xs:extension base="argumentType">
            <xs:sequence minOccurs="0">
                <xs:element name="param"
                            minOccurs="0"
                            maxOccurs="unbounded">
                    <xs:complexType mixed="true">
                        <xs:attribute name="name"
                                      type="xs:string"
                                      use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
            <xs:attribute name="helper" use="required"/>
        </xs:extension>
   </xs:complexContent>
</xs:complexType>
```

By exploring the definition we can see that the helper type has an interesting property.

We are able to pass additional parameters to a helper method.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="main.content">
            <block class="Magento\Cms\Block\Block"
                   name="empty_basket_cms_content">
                <arguments>
                    <argument name="identifier"
                              xsi:type="helper"
                              helper="Codemanufacture\Checkout\Model\Cart::getEmptyBlockIdentifier">
                      <param name="isSummary" xsi:type="bool">true</param>
                    </argument>
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>
```
