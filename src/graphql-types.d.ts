/* tslint:disable */
export type Maybe<T> = T | null

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[]

  order?: Maybe<SitePageConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>

  internalComponentName?: Maybe<
    SitePageConnectionInternalComponentNameQueryString
  >

  path?: Maybe<SitePageConnectionPathQueryString_2>

  component?: Maybe<SitePageConnectionComponentQueryString>

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>

  context?: Maybe<SitePageConnectionContextInputObject>

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>

  id?: Maybe<SitePageConnectionIdQueryString_2>

  internal?: Maybe<SitePageConnectionInternalInputObject_2>
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionContextInputObject {
  slug?: Maybe<SitePageConnectionContextSlugQueryString>
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>

  browserAPIs?: Maybe<SitePageConnectionPluginCreatorBrowserApIsQueryList>

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginFilepathQueryString
  >

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList>

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>

  ignore?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIgnoreQueryList>

  exclude?: Maybe<SitePageConnectionPluginCreatorPluginOptionsExcludeQueryList>

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIdQueryString>

  includeInDevelopment?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsIncludeInDevelopmentQueryBoolean
  >

  siteUrl?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsSiteUrlQueryString
  >

  endpoint?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsEndpointQueryString
  >

  pathCheck?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString
  >

  id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString>

  name?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString
  >

  browserAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >

  ssrAPIs?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList
  >

  pluginFilepath?: Maybe<
    SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsIgnoreQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsExcludeQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsIncludeInDevelopmentQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsSiteUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEndpointQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>

  description?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString
  >

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList
  >

  devDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList
  >

  peerDependencies?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList
  >

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString
  >

  version?: Maybe<
    SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<
    SitePageConnectionPluginCreatorInternalContentDigestQueryString
  >

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[]

  order?: Maybe<SitePluginConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>

  id?: Maybe<SitePluginConnectionIdQueryString_2>

  name?: Maybe<SitePluginConnectionNameQueryString_2>

  version?: Maybe<SitePluginConnectionVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>

  browserAPIs?: Maybe<SitePluginConnectionBrowserApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginConnectionPluginOptionsPluginsQueryList_2>

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>

  ignore?: Maybe<SitePluginConnectionPluginOptionsIgnoreQueryList_2>

  exclude?: Maybe<SitePluginConnectionPluginOptionsExcludeQueryList_2>

  id?: Maybe<SitePluginConnectionPluginOptionsIdQueryString_2>

  includeInDevelopment?: Maybe<
    SitePluginConnectionPluginOptionsIncludeInDevelopmentQueryBoolean_2
  >

  siteUrl?: Maybe<SitePluginConnectionPluginOptionsSiteUrlQueryString_2>

  endpoint?: Maybe<SitePluginConnectionPluginOptionsEndpointQueryString_2>

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginConnectionPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsPluginsInputObject_2>
}

export interface SitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginConnectionPluginOptionsPluginsResolveQueryString_2>

  id?: Maybe<SitePluginConnectionPluginOptionsPluginsIdQueryString_2>

  name?: Maybe<SitePluginConnectionPluginOptionsPluginsNameQueryString_2>

  version?: Maybe<SitePluginConnectionPluginOptionsPluginsVersionQueryString_2>

  browserAPIs?: Maybe<
    SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2
  >

  ssrAPIs?: Maybe<SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2>

  pluginFilepath?: Maybe<
    SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2
  >
}

export interface SitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsIgnoreQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsExcludeQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsIncludeInDevelopmentQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionPluginOptionsSiteUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEndpointQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesQueryList_2
  >

  peerDependencies?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesQueryList_2
  >

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesInputObject_2
  >
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<
    SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2
  >
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[]

  order?: Maybe<DirectoryConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectoryConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>

  root?: Maybe<DirectoryConnectionRootQueryString_2>

  dir?: Maybe<DirectoryConnectionDirQueryString_2>

  base?: Maybe<DirectoryConnectionBaseQueryString_2>

  ext?: Maybe<DirectoryConnectionExtQueryString_2>

  name?: Maybe<DirectoryConnectionNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[]

  order?: Maybe<FileConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>

  internal?: Maybe<FileConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>

  extension?: Maybe<FileConnectionExtensionQueryString_2>

  size?: Maybe<FileConnectionSizeQueryInteger_2>

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>

  root?: Maybe<FileConnectionRootQueryString_2>

  dir?: Maybe<FileConnectionDirQueryString_2>

  base?: Maybe<FileConnectionBaseQueryString_2>

  ext?: Maybe<FileConnectionExtQueryString_2>

  name?: Maybe<FileConnectionNameQueryString_2>

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<FileConnectionDevQueryInteger_2>

  mode?: Maybe<FileConnectionModeQueryInteger_2>

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>

  uid?: Maybe<FileConnectionUidQueryInteger_2>

  gid?: Maybe<FileConnectionGidQueryInteger_2>

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>

  ino?: Maybe<FileConnectionInoQueryInteger_2>

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileConnectionAtimeQueryString_2>

  mtime?: Maybe<FileConnectionMtimeQueryString_2>

  ctime?: Maybe<FileConnectionCtimeQueryString_2>

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_4>
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>

  type?: Maybe<FileConnectionInternalTypeQueryString_2>

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionSort {
  fields: (Maybe<AuthorJsonConnectionSortByFieldsEnum>)[]

  order?: Maybe<AuthorJsonConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterAuthorJson {
  id?: Maybe<AuthorJsonConnectionIdQueryString_2>

  name?: Maybe<AuthorJsonConnectionNameQueryString_2>

  bio?: Maybe<AuthorJsonConnectionBioQueryString_2>

  github?: Maybe<AuthorJsonConnectionGithubQueryString_2>

  twitter?: Maybe<AuthorJsonConnectionTwitterQueryString_2>

  avatar?: Maybe<AuthorJsonConnectionAvatarQueryString_2>

  internal?: Maybe<AuthorJsonConnectionInternalInputObject_2>
}

export interface AuthorJsonConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionBioQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionAvatarQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionInternalInputObject_2 {
  contentDigest?: Maybe<AuthorJsonConnectionInternalContentDigestQueryString_2>

  type?: Maybe<AuthorJsonConnectionInternalTypeQueryString_2>

  owner?: Maybe<AuthorJsonConnectionInternalOwnerQueryString_2>
}

export interface AuthorJsonConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionSort {
  fields: (Maybe<MarkdownRemarkConnectionSortByFieldsEnum>)[]

  order?: Maybe<MarkdownRemarkConnectionSortOrderValues>
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: Maybe<MarkdownRemarkConnectionIdQueryString_2>

  internal?: Maybe<MarkdownRemarkConnectionInternalInputObject_2>

  frontmatter?: Maybe<MarkdownRemarkConnectionFrontmatterInputObject_2>

  excerpt?: Maybe<ExcerptQueryString_4>

  rawMarkdownBody?: Maybe<MarkdownRemarkConnectionRawMarkdownBodyQueryString_2>

  fileAbsolutePath?: Maybe<
    MarkdownRemarkConnectionFileAbsolutePathQueryString_2
  >

  fields?: Maybe<MarkdownRemarkConnectionFieldsInputObject_2>

  html?: Maybe<HtmlQueryString_4>

  headings?: Maybe<HeadingsQueryList_4>

  timeToRead?: Maybe<TimeToReadQueryInt_4>

  tableOfContents?: Maybe<TableOfContentsQueryString_4>

  wordCount?: Maybe<WordCountTypeName_4>
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkConnectionInternalContentQueryString_2>

  type?: Maybe<MarkdownRemarkConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<
    MarkdownRemarkConnectionInternalContentDigestQueryString_2
  >

  owner?: Maybe<MarkdownRemarkConnectionInternalOwnerQueryString_2>

  fieldOwners?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersInputObject_2>
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: Maybe<MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2>

  pageType?: Maybe<
    MarkdownRemarkConnectionInternalFieldOwnersPageTypeQueryString_2
  >
}

export interface MarkdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionInternalFieldOwnersPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkConnectionFrontmatterTitleQueryString_2>

  date?: Maybe<MarkdownRemarkConnectionFrontmatterDateQueryString_2>

  authors?: Maybe<MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2>

  tags?: Maybe<MarkdownRemarkConnectionFrontmatterTagsQueryList_2>

  _PARENT?: Maybe<MarkdownRemarkConnectionFrontmatterParentQueryString_2>
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterAuthorsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ExcerptQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFieldsInputObject_2 {
  slug?: Maybe<MarkdownRemarkConnectionFieldsSlugQueryString_2>

  pageType?: Maybe<MarkdownRemarkConnectionFieldsPageTypeQueryString_2>
}

export interface MarkdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkConnectionFieldsPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HtmlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsQueryList_4 {
  elemMatch?: Maybe<HeadingsListElemTypeName_4>
}

export interface HeadingsListElemTypeName_4 {
  value?: Maybe<HeadingsListElemValueQueryString_4>

  depth?: Maybe<HeadingsListElemDepthQueryInt_4>
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TimeToReadQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TableOfContentsQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface WordCountTypeName_4 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_4>

  sentences?: Maybe<WordCountSentencesQueryInt_4>

  words?: Maybe<WordCountWordsQueryInt_4>
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountSentencesQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountWordsQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageContextInputObject {
  slug?: Maybe<SitePageContextSlugQueryString>
}

export interface SitePageContextSlugQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>

  id?: Maybe<SitePagePluginCreatorIdQueryString>

  name?: Maybe<SitePagePluginCreatorNameQueryString>

  version?: Maybe<SitePagePluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>

  browserAPIs?: Maybe<SitePagePluginCreatorBrowserApIsQueryList>

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePagePluginCreatorParentQueryString>

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  plugins?: Maybe<SitePagePluginCreatorPluginOptionsPluginsQueryList>

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>

  ignore?: Maybe<SitePagePluginCreatorPluginOptionsIgnoreQueryList>

  exclude?: Maybe<SitePagePluginCreatorPluginOptionsExcludeQueryList>

  id?: Maybe<SitePagePluginCreatorPluginOptionsIdQueryString>

  includeInDevelopment?: Maybe<
    SitePagePluginCreatorPluginOptionsIncludeInDevelopmentQueryBoolean
  >

  siteUrl?: Maybe<SitePagePluginCreatorPluginOptionsSiteUrlQueryString>

  endpoint?: Maybe<SitePagePluginCreatorPluginOptionsEndpointQueryString>

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePagePluginCreatorPluginOptionsPluginsQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsPluginsInputObject>
}

export interface SitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: Maybe<SitePagePluginCreatorPluginOptionsPluginsResolveQueryString>

  id?: Maybe<SitePagePluginCreatorPluginOptionsPluginsIdQueryString>

  name?: Maybe<SitePagePluginCreatorPluginOptionsPluginsNameQueryString>

  version?: Maybe<SitePagePluginCreatorPluginOptionsPluginsVersionQueryString>

  browserAPIs?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList
  >

  ssrAPIs?: Maybe<SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList>

  pluginFilepath?: Maybe<
    SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString
  >
}

export interface SitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsIgnoreQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsExcludeQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsIncludeInDevelopmentQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorPluginOptionsSiteUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEndpointQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesQueryList
  >

  peerDependencies?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesQueryList
  >

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<
    SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString
  >
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>

  description?: Maybe<SitePageInternalDescriptionQueryString>

  owner?: Maybe<SitePageInternalOwnerQueryString_2>
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInputObject_2 {
  plugins?: Maybe<SitePluginPluginOptionsPluginsQueryList_2>

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>

  ignore?: Maybe<SitePluginPluginOptionsIgnoreQueryList_2>

  exclude?: Maybe<SitePluginPluginOptionsExcludeQueryList_2>

  id?: Maybe<SitePluginPluginOptionsIdQueryString_2>

  includeInDevelopment?: Maybe<
    SitePluginPluginOptionsIncludeInDevelopmentQueryBoolean_2
  >

  siteUrl?: Maybe<SitePluginPluginOptionsSiteUrlQueryString_2>

  endpoint?: Maybe<SitePluginPluginOptionsEndpointQueryString_2>

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginPluginOptionsPluginsQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsInputObject_2>
}

export interface SitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: Maybe<SitePluginPluginOptionsPluginsResolveQueryString_2>

  id?: Maybe<SitePluginPluginOptionsPluginsIdQueryString_2>

  name?: Maybe<SitePluginPluginOptionsPluginsNameQueryString_2>

  version?: Maybe<SitePluginPluginOptionsPluginsVersionQueryString_2>

  browserAPIs?: Maybe<SitePluginPluginOptionsPluginsBrowserApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginPluginOptionsPluginsSsrApIsQueryList_2>

  pluginFilepath?: Maybe<
    SitePluginPluginOptionsPluginsPluginFilepathQueryString_2
  >
}

export interface SitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsIgnoreQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsExcludeQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsIncludeInDevelopmentQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginPluginOptionsSiteUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEndpointQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginInternalTypeQueryString_2>

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataInputObject_2 {
  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>

  keywords?: Maybe<SiteSiteMetadataKeywordsQueryString_2>

  siteUrl?: Maybe<SiteSiteMetadataSiteUrlQueryString_2>

  title?: Maybe<SiteSiteMetadataTitleQueryString_2>
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataKeywordsQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataSiteUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>

  type?: Maybe<SiteInternalTypeQueryString_2>

  owner?: Maybe<SiteInternalOwnerQueryString_2>
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryInternalTypeQueryString_2>

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>

  type?: Maybe<FileInternalTypeQueryString_2>

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>

  description?: Maybe<FileInternalDescriptionQueryString_2>

  owner?: Maybe<FileInternalOwnerQueryString_2>
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonBioQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonGithubQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonTwitterQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonAvatarQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonInternalInputObject_2 {
  contentDigest?: Maybe<AuthorJsonInternalContentDigestQueryString_2>

  type?: Maybe<AuthorJsonInternalTypeQueryString_2>

  owner?: Maybe<AuthorJsonInternalOwnerQueryString_2>
}

export interface AuthorJsonInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface AuthorJsonInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: Maybe<MarkdownRemarkInternalContentQueryString_2>

  type?: Maybe<MarkdownRemarkInternalTypeQueryString_2>

  contentDigest?: Maybe<MarkdownRemarkInternalContentDigestQueryString_2>

  owner?: Maybe<MarkdownRemarkInternalOwnerQueryString_2>

  fieldOwners?: Maybe<MarkdownRemarkInternalFieldOwnersInputObject_2>
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: Maybe<MarkdownRemarkInternalFieldOwnersSlugQueryString_2>

  pageType?: Maybe<MarkdownRemarkInternalFieldOwnersPageTypeQueryString_2>
}

export interface MarkdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkInternalFieldOwnersPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: Maybe<MarkdownRemarkFrontmatterTitleQueryString_2>

  date?: Maybe<MarkdownRemarkFrontmatterDateQueryString_2>

  authors?: Maybe<MarkdownRemarkFrontmatterAuthorsQueryList_2>

  tags?: Maybe<MarkdownRemarkFrontmatterTagsQueryList_2>

  _PARENT?: Maybe<MarkdownRemarkFrontmatterParentQueryString_2>
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterAuthorsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterTagsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ExcerptQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFieldsInputObject_2 {
  slug?: Maybe<MarkdownRemarkFieldsSlugQueryString_2>

  pageType?: Maybe<MarkdownRemarkFieldsPageTypeQueryString_2>
}

export interface MarkdownRemarkFieldsSlugQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface MarkdownRemarkFieldsPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HtmlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsQueryList_3 {
  elemMatch?: Maybe<HeadingsListElemTypeName_3>
}

export interface HeadingsListElemTypeName_3 {
  value?: Maybe<HeadingsListElemValueQueryString_3>

  depth?: Maybe<HeadingsListElemDepthQueryInt_3>
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TimeToReadQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface TableOfContentsQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface WordCountTypeName_3 {
  paragraphs?: Maybe<WordCountParagraphsQueryInt_3>

  sentences?: Maybe<WordCountSentencesQueryInt_3>

  words?: Maybe<WordCountWordsQueryInt_3>
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountSentencesQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface WordCountWordsQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ContextSlug = 'context___slug',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsIncludeInDevelopment = 'pluginOptions___includeInDevelopment',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsIncludeInDevelopment = 'pluginOptions___includeInDevelopment',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsIncludeInDevelopment = 'pluginOptions___includeInDevelopment',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum AuthorJsonConnectionSortByFieldsEnum {
  Id = 'id',
  Name = 'name',
  Bio = 'bio',
  Github = 'github',
  Twitter = 'twitter',
  Avatar = 'avatar',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum AuthorJsonConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum AuthorJsonDistinctEnum {
  Id = 'id',
  Name = 'name',
  Bio = 'bio',
  Github = 'github',
  Twitter = 'twitter',
  Avatar = 'avatar',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum AuthorJsonGroupEnum {
  Id = 'id',
  Name = 'name',
  Bio = 'bio',
  Github = 'github',
  Twitter = 'twitter',
  Avatar = 'avatar',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  InternalFieldOwnersPageType = 'internal___fieldOwners___pageType',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterAuthors = 'frontmatter___authors',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsPageType = 'fields___pageType',
  Html = 'html',
  Headings = 'headings',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum MarkdownRemarkDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  InternalFieldOwnersPageType = 'internal___fieldOwners___pageType',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterAuthors = 'frontmatter___authors',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsPageType = 'fields___pageType',
}

export enum MarkdownRemarkGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  InternalFieldOwnersSlug = 'internal___fieldOwners___slug',
  InternalFieldOwnersPageType = 'internal___fieldOwners___pageType',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterAuthors = 'frontmatter___authors',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsPageType = 'fields___pageType',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>
  /** Connection to all AuthorJson nodes */
  allAuthorJson?: Maybe<AuthorJsonConnection>
  /** Connection to all MarkdownRemark nodes */
  allMarkdownRemark?: Maybe<MarkdownRemarkConnection>

  sitePage?: Maybe<SitePage>

  sitePlugin?: Maybe<SitePlugin>

  site?: Maybe<Site>

  directory?: Maybe<Directory>

  file?: Maybe<File>

  authorJson?: Maybe<AuthorJson>

  markdownRemark?: Maybe<MarkdownRemark>
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  jsonName?: Maybe<string>

  internalComponentName?: Maybe<string>

  path?: Maybe<string>

  component?: Maybe<string>

  componentChunkName?: Maybe<string>

  context?: Maybe<Context>

  pluginCreator?: Maybe<SitePlugin>

  pluginCreatorId?: Maybe<string>

  componentPath?: Maybe<string>

  internal?: Maybe<Internal_8>
}

export interface Context {
  slug?: Maybe<string>
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  resolve?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<PluginOptions_2>

  nodeAPIs?: Maybe<(Maybe<string>)[]>

  browserAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>

  packageJson?: Maybe<PackageJson_2>

  internal?: Maybe<Internal_9>
}

export interface PluginOptions_2 {
  plugins?: Maybe<(Maybe<Plugins_2>)[]>

  path?: Maybe<string>

  name?: Maybe<string>

  ignore?: Maybe<(Maybe<string>)[]>

  exclude?: Maybe<(Maybe<string>)[]>

  id?: Maybe<string>

  includeInDevelopment?: Maybe<boolean>

  siteUrl?: Maybe<string>

  endpoint?: Maybe<string>

  pathCheck?: Maybe<boolean>
}

export interface Plugins_2 {
  resolve?: Maybe<string>

  id?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  browserAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>
}

export interface PackageJson_2 {
  name?: Maybe<string>

  description?: Maybe<string>

  version?: Maybe<string>

  main?: Maybe<string>

  author?: Maybe<string>

  license?: Maybe<string>

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>

  keywords?: Maybe<(Maybe<string>)[]>
}

export interface Dependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface DevDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface PeerDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface Internal_9 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface Internal_8 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_10>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
}

export interface Internal_10 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
  /** The child of this node of type authorJson */
  childAuthorJson?: Maybe<AuthorJson>
  /** The child of this node of type markdownRemark */
  childMarkdownRemark?: Maybe<MarkdownRemark>

  internal?: Maybe<Internal_11>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>
}

/** Node of type AuthorJson */
export interface AuthorJson extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  name?: Maybe<string>

  bio?: Maybe<string>

  github?: Maybe<string>

  twitter?: Maybe<string>

  avatar?: Maybe<File>

  internal?: Maybe<Internal_12>
}

export interface Internal_12 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

/** Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_13>

  frontmatter?: Maybe<Frontmatter_2>

  rawMarkdownBody?: Maybe<string>

  fileAbsolutePath?: Maybe<string>

  fields?: Maybe<Fields_2>

  html?: Maybe<string>

  htmlAst?: Maybe<Json>

  excerpt?: Maybe<string>

  headings?: Maybe<(Maybe<MarkdownHeading>)[]>

  timeToRead?: Maybe<number>

  tableOfContents?: Maybe<string>

  wordCount?: Maybe<WordCount>
}

export interface Internal_13 {
  content?: Maybe<string>

  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>

  fieldOwners?: Maybe<FieldOwners_2>
}

export interface FieldOwners_2 {
  slug?: Maybe<string>

  pageType?: Maybe<string>
}

export interface Frontmatter_2 {
  title?: Maybe<string>

  date?: Maybe<Date>

  authors?: Maybe<AuthorJson[]>

  tags?: Maybe<(Maybe<string>)[]>
  backgroundColor?: string
  backgroundImage?: Maybe<File>

  _PARENT?: Maybe<string>
}

export interface Fields_2 {
  slug?: Maybe<string>

  pageType?: Maybe<string>
}

export interface MarkdownHeading {
  value?: Maybe<string>

  depth?: Maybe<number>
}

export interface WordCount {
  paragraphs?: Maybe<number>

  sentences?: Maybe<number>

  words?: Maybe<number>
}

export interface Internal_11 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  mediaType?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** A connection to a list of items. */
export interface AuthorJsonConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<AuthorJsonEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<AuthorJsonGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface AuthorJsonEdge {
  /** The item at the end of the edge */
  node?: Maybe<AuthorJson>
  /** The next edge in the connection */
  next?: Maybe<AuthorJson>
  /** The previous edge in the connection */
  previous?: Maybe<AuthorJson>
}

/** A connection to a list of items. */
export interface AuthorJsonGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<AuthorJsonGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface AuthorJsonGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<AuthorJson>
  /** The next edge in the connection */
  next?: Maybe<AuthorJson>
  /** The previous edge in the connection */
  previous?: Maybe<AuthorJson>
}

/** A connection to a list of items. */
export interface MarkdownRemarkConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<MarkdownRemarkGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface MarkdownRemarkEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>
}

/** A connection to a list of items. */
export interface MarkdownRemarkGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<MarkdownRemarkGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface MarkdownRemarkGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<MarkdownRemark>
  /** The next edge in the connection */
  next?: Maybe<MarkdownRemark>
  /** The previous edge in the connection */
  previous?: Maybe<MarkdownRemark>
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  siteMetadata?: Maybe<SiteMetadata_2>

  port?: Maybe<Date>

  host?: Maybe<string>

  pathPrefix?: Maybe<string>

  polyfill?: Maybe<boolean>

  buildTime?: Maybe<Date>

  internal?: Maybe<Internal_14>
}

export interface SiteMetadata_2 {
  description?: Maybe<string>

  keywords?: Maybe<string>

  siteUrl?: Maybe<string>

  title?: Maybe<string>
}

export interface Internal_14 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePageConnectionSort>

  filter?: Maybe<FilterSitePage>
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePluginConnectionSort>

  filter?: Maybe<FilterSitePlugin>
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<DirectoryConnectionSort>

  filter?: Maybe<FilterDirectory>
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<FileConnectionSort>

  filter?: Maybe<FilterFile>
}
export interface AllAuthorJsonQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<AuthorJsonConnectionSort>

  filter?: Maybe<FilterAuthorJson>
}
export interface AllMarkdownRemarkQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<MarkdownRemarkConnectionSort>

  filter?: Maybe<FilterMarkdownRemark>
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>

  path?: Maybe<SitePagePathQueryString_2>

  component?: Maybe<SitePageComponentQueryString>

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>

  context?: Maybe<SitePageContextInputObject>

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageComponentPathQueryString>

  id?: Maybe<SitePageIdQueryString_2>

  internal?: Maybe<SitePageInternalInputObject_2>
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>

  id?: Maybe<SitePluginIdQueryString_2>

  name?: Maybe<SitePluginNameQueryString_2>

  version?: Maybe<SitePluginVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>

  browserAPIs?: Maybe<SitePluginBrowserApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>

  internal?: Maybe<SitePluginInternalInputObject_2>
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>

  port?: Maybe<SitePortQueryString_2>

  host?: Maybe<SiteHostQueryString_2>

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>

  buildTime?: Maybe<SiteBuildTimeQueryString_2>

  id?: Maybe<SiteIdQueryString_2>

  internal?: Maybe<SiteInternalInputObject_2>
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>

  internal?: Maybe<DirectoryInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>

  extension?: Maybe<DirectoryExtensionQueryString_2>

  size?: Maybe<DirectorySizeQueryInteger_2>

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>

  root?: Maybe<DirectoryRootQueryString_2>

  dir?: Maybe<DirectoryDirQueryString_2>

  base?: Maybe<DirectoryBaseQueryString_2>

  ext?: Maybe<DirectoryExtQueryString_2>

  name?: Maybe<DirectoryNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryDevQueryInteger_2>

  mode?: Maybe<DirectoryModeQueryInteger_2>

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>

  uid?: Maybe<DirectoryUidQueryInteger_2>

  gid?: Maybe<DirectoryGidQueryInteger_2>

  rdev?: Maybe<DirectoryRdevQueryInteger_2>

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryInoQueryInteger_2>

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryAtimeQueryString_2>

  mtime?: Maybe<DirectoryMtimeQueryString_2>

  ctime?: Maybe<DirectoryCtimeQueryString_2>

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>

  internal?: Maybe<FileInternalInputObject_2>

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>

  relativePath?: Maybe<FileRelativePathQueryString_2>

  extension?: Maybe<FileExtensionQueryString_2>

  size?: Maybe<FileSizeQueryInteger_2>

  prettySize?: Maybe<FilePrettySizeQueryString_2>

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>

  accessTime?: Maybe<FileAccessTimeQueryString_2>

  changeTime?: Maybe<FileChangeTimeQueryString_2>

  birthTime?: Maybe<FileBirthTimeQueryString_2>

  root?: Maybe<FileRootQueryString_2>

  dir?: Maybe<FileDirQueryString_2>

  base?: Maybe<FileBaseQueryString_2>

  ext?: Maybe<FileExtQueryString_2>

  name?: Maybe<FileNameQueryString_2>

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>

  dev?: Maybe<FileDevQueryInteger_2>

  mode?: Maybe<FileModeQueryInteger_2>

  nlink?: Maybe<FileNlinkQueryInteger_2>

  uid?: Maybe<FileUidQueryInteger_2>

  gid?: Maybe<FileGidQueryInteger_2>

  rdev?: Maybe<FileRdevQueryInteger_2>

  blksize?: Maybe<FileBlksizeQueryInteger_2>

  ino?: Maybe<FileInoQueryInteger_2>

  blocks?: Maybe<FileBlocksQueryInteger_2>

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileAtimeQueryString_2>

  mtime?: Maybe<FileMtimeQueryString_2>

  ctime?: Maybe<FileCtimeQueryString_2>

  birthtime?: Maybe<FileBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_3>
}
export interface AuthorJsonQueryArgs {
  id?: Maybe<AuthorJsonIdQueryString_2>

  name?: Maybe<AuthorJsonNameQueryString_2>

  bio?: Maybe<AuthorJsonBioQueryString_2>

  github?: Maybe<AuthorJsonGithubQueryString_2>

  twitter?: Maybe<AuthorJsonTwitterQueryString_2>

  avatar?: Maybe<AuthorJsonAvatarQueryString_2>

  internal?: Maybe<AuthorJsonInternalInputObject_2>
}
export interface MarkdownRemarkQueryArgs {
  id?: Maybe<MarkdownRemarkIdQueryString_2>

  internal?: Maybe<MarkdownRemarkInternalInputObject_2>

  frontmatter?: Maybe<MarkdownRemarkFrontmatterInputObject_2>

  excerpt?: Maybe<ExcerptQueryString_3>

  rawMarkdownBody?: Maybe<MarkdownRemarkRawMarkdownBodyQueryString_2>

  fileAbsolutePath?: Maybe<MarkdownRemarkFileAbsolutePathQueryString_2>

  fields?: Maybe<MarkdownRemarkFieldsInputObject_2>

  html?: Maybe<HtmlQueryString_3>

  headings?: Maybe<HeadingsQueryList_3>

  timeToRead?: Maybe<TimeToReadQueryInt_3>

  tableOfContents?: Maybe<TableOfContentsQueryString_3>

  wordCount?: Maybe<WordCountTypeName_3>
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePageGroupEnum>
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePluginGroupEnum>
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<DirectoryGroupEnum>
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<FileGroupEnum>
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: Maybe<number>

  truncate?: Maybe<boolean>

  format?: Maybe<ExcerptFormats>
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: Maybe<HeadingLevels>
}
export interface TableOfContentsMarkdownRemarkArgs {
  pathToSlugField?: Maybe<string>
}
export interface DateFrontmatter_2Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctAuthorJsonConnectionArgs {
  field?: Maybe<AuthorJsonDistinctEnum>
}
export interface GroupAuthorJsonConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<AuthorJsonGroupEnum>
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: Maybe<MarkdownRemarkDistinctEnum>
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<MarkdownRemarkGroupEnum>
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
