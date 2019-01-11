---
title: Sample post
date: 2018-11-17
authors: [piotr-kwiecinski]
tags: [sample]
backgroundImage: '../posts/post-background.jpg'
backgroundColor: '#000'
---

## Main title

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur ut orci ut auctor. Fusce in odio efficitur, pretium augue ac, semper justo. Sed lacinia vel tellus quis posuere. Nulla at mi et ex imperdiet sollicitudin eu at lectus. Aenean eget orci sem. Suspendisse in lectus nisl. Curabitur mattis facilisis velit quis eleifend. Quisque in orci et dolor aliquam tempor in ac orci. Quisque ex enim, aliquet in ultrices non, ultrices nec felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

### Smaller title

Praesent vehicula erat arcu, et porttitor turpis vehicula nec. Mauris tempus erat nulla, sed efficitur justo bibendum nec. Proin quis lacus dapibus, tincidunt nunc ac, convallis magna. Vestibulum quis condimentum nunc, quis consectetur libero. In sagittis, orci eu aliquam tempus, leo risus pellentesque ligula, non faucibus est purus quis lectus. Sed fringilla accumsan fermentum. Sed vitae tincidunt enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ex vitae sapien viverra hendrerit id id diam.

### Some list

- first item
- second item
- third item

Etiam lacus nisl, tempor ac nisl vitae, tristique fermentum turpis. Vivamus purus libero, pulvinar at malesuada sit amet, pharetra vitae velit. Phasellus volutpat mauris et varius pharetra. Cras eu ultrices est. Vestibulum tincidunt ultrices erat, sed hendrerit arcu consequat vitae. Integer erat nisl, sagittis suscipit elementum eget, cursus eget leo. Duis hendrerit ultrices arcu, et fringilla nunc.

### Some ordered list

1. first item
2. second item
3. third item

Etiam lacus nisl, tempor ac nisl vitae, tristique fermentum turpis. Vivamus purus libero, pulvinar at malesuada sit amet, pharetra vitae velit. Phasellus volutpat mauris et varius pharetra. Cras eu ultrices est. Vestibulum tincidunt ultrices erat, sed hendrerit arcu consequat vitae. Integer erat nisl, sagittis suscipit elementum eget, cursus eget leo. Duis hendrerit ultrices arcu, et fringilla nunc.

### Lets try some quotes

> Quoted text.
>
> > Quoted quote.

Etiam lacus nisl, tempor ac nisl vitae, tristique fermentum turpis. Vivamus purus libero, pulvinar at malesuada sit amet, pharetra vitae velit. Phasellus volutpat

#### Even smaller title

Etiam lacus nisl, tempor ac nisl vitae, tristique fermentum turpis. Vivamus purus libero, pulvinar at malesuada sit amet, pharetra vitae velit. Phasellus volutpat mauris et varius pharetra. Cras eu ultrices est. Vestibulum tincidunt ultrices erat, sed hendrerit arcu consequat vitae. Integer erat nisl, sagittis suscipit elementum eget, cursus eget leo. Duis hendrerit ultrices arcu, et fringilla nunc.

Aliquam luctus pretium gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nisl purus, elementum venenatis quam at, interdum fringilla eros. Nulla facilisi. Etiam semper quam non consectetur gravida. Suspendisse imperdiet quis augue placerat aliquet. Fusce fringilla sagittis enim, et tempus metus aliquet eu. Sed efficitur, odio vitae vehicula pulvinar, tellus ante aliquet mauris, in dapibus diam ligula vitae urna. Nulla at maximus ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu turpis in diam porta vestibulum. Duis posuere lorem dolor, at dignissim justo fringilla id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Nullam vitae fermentum arcu. Duis facilisis luctus sodales. Curabitur pulvinar hendrerit odio sit amet fermentum. Quisque molestie hendrerit ullamcorper. Integer at velit pharetra, tristique dui porttitor, rutrum arcu. Proin lacus mauris, euismod a arcu vel, accumsan pellentesque eros. Ut eleifend tortor nec arcu dapibus mattis. Nunc vel pulvinar mauris. Suspendisse potenti. Donec interdum faucibus fringilla.

```jsx
const SocialIcon: React.SFC<SocialIconProps> = ({
  backgroundColor,
  icon,
  name,
  url,
  width,
  height,
}) => (
  <li>
    <StyledSocialIcon backgroundColor={backgroundColor}>
      <a href={url} rel="noopener norefferer" target="_blank">
        <span className="icon-wrapper">
          <img src={icon} alt={`${name}`} width={width} height={height} />
        </span>
        <span className="icon-wrapper">
          <img src={icon} alt={`${name}`} width={width} height={height} />
        </span>
      </a>
    </StyledSocialIcon>
  </li>
)
```
