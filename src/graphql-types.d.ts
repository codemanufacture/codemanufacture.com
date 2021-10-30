/* tslint:disable */
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AuthorJson = Node & {
  __typename?: 'AuthorJson'
  avatar?: Maybe<File>
  bio?: Maybe<Scalars['String']>
  children: Array<Node>
  github?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  jsonId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  parent?: Maybe<Node>
  twitter?: Maybe<Scalars['String']>
}

export type AuthorJsonConnection = {
  __typename?: 'AuthorJsonConnection'
  distinct: Array<Scalars['String']>
  edges: Array<AuthorJsonEdge>
  group: Array<AuthorJsonGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<AuthorJson>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type AuthorJsonConnectionDistinctArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonConnectionGroupArgs = {
  field: AuthorJsonFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type AuthorJsonConnectionMaxArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonConnectionMinArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonConnectionSumArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonEdge = {
  __typename?: 'AuthorJsonEdge'
  next?: Maybe<AuthorJson>
  node: AuthorJson
  previous?: Maybe<AuthorJson>
}

export enum AuthorJsonFieldsEnum {
  AvatarAbsolutePath = 'avatar___absolutePath',
  AvatarAccessTime = 'avatar___accessTime',
  AvatarAtime = 'avatar___atime',
  AvatarAtimeMs = 'avatar___atimeMs',
  AvatarBase = 'avatar___base',
  AvatarBirthTime = 'avatar___birthTime',
  AvatarBirthtime = 'avatar___birthtime',
  AvatarBirthtimeMs = 'avatar___birthtimeMs',
  AvatarBlksize = 'avatar___blksize',
  AvatarBlocks = 'avatar___blocks',
  AvatarChangeTime = 'avatar___changeTime',
  AvatarChildAuthorJsonAvatarAbsolutePath = 'avatar___childAuthorJson___avatar___absolutePath',
  AvatarChildAuthorJsonAvatarAccessTime = 'avatar___childAuthorJson___avatar___accessTime',
  AvatarChildAuthorJsonAvatarAtime = 'avatar___childAuthorJson___avatar___atime',
  AvatarChildAuthorJsonAvatarAtimeMs = 'avatar___childAuthorJson___avatar___atimeMs',
  AvatarChildAuthorJsonAvatarBase = 'avatar___childAuthorJson___avatar___base',
  AvatarChildAuthorJsonAvatarBirthTime = 'avatar___childAuthorJson___avatar___birthTime',
  AvatarChildAuthorJsonAvatarBirthtime = 'avatar___childAuthorJson___avatar___birthtime',
  AvatarChildAuthorJsonAvatarBirthtimeMs = 'avatar___childAuthorJson___avatar___birthtimeMs',
  AvatarChildAuthorJsonAvatarBlksize = 'avatar___childAuthorJson___avatar___blksize',
  AvatarChildAuthorJsonAvatarBlocks = 'avatar___childAuthorJson___avatar___blocks',
  AvatarChildAuthorJsonAvatarChangeTime = 'avatar___childAuthorJson___avatar___changeTime',
  AvatarChildAuthorJsonAvatarChildren = 'avatar___childAuthorJson___avatar___children',
  AvatarChildAuthorJsonAvatarChildrenAuthorJson = 'avatar___childAuthorJson___avatar___childrenAuthorJson',
  AvatarChildAuthorJsonAvatarChildrenMarkdownRemark = 'avatar___childAuthorJson___avatar___childrenMarkdownRemark',
  AvatarChildAuthorJsonAvatarCtime = 'avatar___childAuthorJson___avatar___ctime',
  AvatarChildAuthorJsonAvatarCtimeMs = 'avatar___childAuthorJson___avatar___ctimeMs',
  AvatarChildAuthorJsonAvatarDev = 'avatar___childAuthorJson___avatar___dev',
  AvatarChildAuthorJsonAvatarDir = 'avatar___childAuthorJson___avatar___dir',
  AvatarChildAuthorJsonAvatarExt = 'avatar___childAuthorJson___avatar___ext',
  AvatarChildAuthorJsonAvatarExtension = 'avatar___childAuthorJson___avatar___extension',
  AvatarChildAuthorJsonAvatarGid = 'avatar___childAuthorJson___avatar___gid',
  AvatarChildAuthorJsonAvatarId = 'avatar___childAuthorJson___avatar___id',
  AvatarChildAuthorJsonAvatarIno = 'avatar___childAuthorJson___avatar___ino',
  AvatarChildAuthorJsonAvatarMode = 'avatar___childAuthorJson___avatar___mode',
  AvatarChildAuthorJsonAvatarModifiedTime = 'avatar___childAuthorJson___avatar___modifiedTime',
  AvatarChildAuthorJsonAvatarMtime = 'avatar___childAuthorJson___avatar___mtime',
  AvatarChildAuthorJsonAvatarMtimeMs = 'avatar___childAuthorJson___avatar___mtimeMs',
  AvatarChildAuthorJsonAvatarName = 'avatar___childAuthorJson___avatar___name',
  AvatarChildAuthorJsonAvatarNlink = 'avatar___childAuthorJson___avatar___nlink',
  AvatarChildAuthorJsonAvatarPrettySize = 'avatar___childAuthorJson___avatar___prettySize',
  AvatarChildAuthorJsonAvatarPublicUrl = 'avatar___childAuthorJson___avatar___publicURL',
  AvatarChildAuthorJsonAvatarRdev = 'avatar___childAuthorJson___avatar___rdev',
  AvatarChildAuthorJsonAvatarRelativeDirectory = 'avatar___childAuthorJson___avatar___relativeDirectory',
  AvatarChildAuthorJsonAvatarRelativePath = 'avatar___childAuthorJson___avatar___relativePath',
  AvatarChildAuthorJsonAvatarRoot = 'avatar___childAuthorJson___avatar___root',
  AvatarChildAuthorJsonAvatarSize = 'avatar___childAuthorJson___avatar___size',
  AvatarChildAuthorJsonAvatarSourceInstanceName = 'avatar___childAuthorJson___avatar___sourceInstanceName',
  AvatarChildAuthorJsonAvatarUid = 'avatar___childAuthorJson___avatar___uid',
  AvatarChildAuthorJsonBio = 'avatar___childAuthorJson___bio',
  AvatarChildAuthorJsonChildren = 'avatar___childAuthorJson___children',
  AvatarChildAuthorJsonChildrenChildren = 'avatar___childAuthorJson___children___children',
  AvatarChildAuthorJsonChildrenId = 'avatar___childAuthorJson___children___id',
  AvatarChildAuthorJsonGithub = 'avatar___childAuthorJson___github',
  AvatarChildAuthorJsonId = 'avatar___childAuthorJson___id',
  AvatarChildAuthorJsonInternalContent = 'avatar___childAuthorJson___internal___content',
  AvatarChildAuthorJsonInternalContentDigest = 'avatar___childAuthorJson___internal___contentDigest',
  AvatarChildAuthorJsonInternalDescription = 'avatar___childAuthorJson___internal___description',
  AvatarChildAuthorJsonInternalFieldOwners = 'avatar___childAuthorJson___internal___fieldOwners',
  AvatarChildAuthorJsonInternalIgnoreType = 'avatar___childAuthorJson___internal___ignoreType',
  AvatarChildAuthorJsonInternalMediaType = 'avatar___childAuthorJson___internal___mediaType',
  AvatarChildAuthorJsonInternalOwner = 'avatar___childAuthorJson___internal___owner',
  AvatarChildAuthorJsonInternalType = 'avatar___childAuthorJson___internal___type',
  AvatarChildAuthorJsonJsonId = 'avatar___childAuthorJson___jsonId',
  AvatarChildAuthorJsonName = 'avatar___childAuthorJson___name',
  AvatarChildAuthorJsonParentChildren = 'avatar___childAuthorJson___parent___children',
  AvatarChildAuthorJsonParentId = 'avatar___childAuthorJson___parent___id',
  AvatarChildAuthorJsonTwitter = 'avatar___childAuthorJson___twitter',
  AvatarChildMarkdownRemarkChildren = 'avatar___childMarkdownRemark___children',
  AvatarChildMarkdownRemarkChildrenChildren = 'avatar___childMarkdownRemark___children___children',
  AvatarChildMarkdownRemarkChildrenId = 'avatar___childMarkdownRemark___children___id',
  AvatarChildMarkdownRemarkExcerpt = 'avatar___childMarkdownRemark___excerpt',
  AvatarChildMarkdownRemarkExcerptAst = 'avatar___childMarkdownRemark___excerptAst',
  AvatarChildMarkdownRemarkFieldsPageType = 'avatar___childMarkdownRemark___fields___pageType',
  AvatarChildMarkdownRemarkFieldsSlug = 'avatar___childMarkdownRemark___fields___slug',
  AvatarChildMarkdownRemarkFileAbsolutePath = 'avatar___childMarkdownRemark___fileAbsolutePath',
  AvatarChildMarkdownRemarkFrontmatterAuthors = 'avatar___childMarkdownRemark___frontmatter___authors',
  AvatarChildMarkdownRemarkFrontmatterBackgroundColor = 'avatar___childMarkdownRemark___frontmatter___backgroundColor',
  AvatarChildMarkdownRemarkFrontmatterDate = 'avatar___childMarkdownRemark___frontmatter___date',
  AvatarChildMarkdownRemarkFrontmatterTags = 'avatar___childMarkdownRemark___frontmatter___tags',
  AvatarChildMarkdownRemarkFrontmatterTitle = 'avatar___childMarkdownRemark___frontmatter___title',
  AvatarChildMarkdownRemarkHeadings = 'avatar___childMarkdownRemark___headings',
  AvatarChildMarkdownRemarkHeadingsDepth = 'avatar___childMarkdownRemark___headings___depth',
  AvatarChildMarkdownRemarkHeadingsId = 'avatar___childMarkdownRemark___headings___id',
  AvatarChildMarkdownRemarkHeadingsValue = 'avatar___childMarkdownRemark___headings___value',
  AvatarChildMarkdownRemarkHtml = 'avatar___childMarkdownRemark___html',
  AvatarChildMarkdownRemarkHtmlAst = 'avatar___childMarkdownRemark___htmlAst',
  AvatarChildMarkdownRemarkId = 'avatar___childMarkdownRemark___id',
  AvatarChildMarkdownRemarkInternalContent = 'avatar___childMarkdownRemark___internal___content',
  AvatarChildMarkdownRemarkInternalContentDigest = 'avatar___childMarkdownRemark___internal___contentDigest',
  AvatarChildMarkdownRemarkInternalDescription = 'avatar___childMarkdownRemark___internal___description',
  AvatarChildMarkdownRemarkInternalFieldOwners = 'avatar___childMarkdownRemark___internal___fieldOwners',
  AvatarChildMarkdownRemarkInternalIgnoreType = 'avatar___childMarkdownRemark___internal___ignoreType',
  AvatarChildMarkdownRemarkInternalMediaType = 'avatar___childMarkdownRemark___internal___mediaType',
  AvatarChildMarkdownRemarkInternalOwner = 'avatar___childMarkdownRemark___internal___owner',
  AvatarChildMarkdownRemarkInternalType = 'avatar___childMarkdownRemark___internal___type',
  AvatarChildMarkdownRemarkParentChildren = 'avatar___childMarkdownRemark___parent___children',
  AvatarChildMarkdownRemarkParentId = 'avatar___childMarkdownRemark___parent___id',
  AvatarChildMarkdownRemarkRawMarkdownBody = 'avatar___childMarkdownRemark___rawMarkdownBody',
  AvatarChildMarkdownRemarkTableOfContents = 'avatar___childMarkdownRemark___tableOfContents',
  AvatarChildMarkdownRemarkTimeToRead = 'avatar___childMarkdownRemark___timeToRead',
  AvatarChildMarkdownRemarkWordCountParagraphs = 'avatar___childMarkdownRemark___wordCount___paragraphs',
  AvatarChildMarkdownRemarkWordCountSentences = 'avatar___childMarkdownRemark___wordCount___sentences',
  AvatarChildMarkdownRemarkWordCountWords = 'avatar___childMarkdownRemark___wordCount___words',
  AvatarChildren = 'avatar___children',
  AvatarChildrenAuthorJson = 'avatar___childrenAuthorJson',
  AvatarChildrenAuthorJsonAvatarAbsolutePath = 'avatar___childrenAuthorJson___avatar___absolutePath',
  AvatarChildrenAuthorJsonAvatarAccessTime = 'avatar___childrenAuthorJson___avatar___accessTime',
  AvatarChildrenAuthorJsonAvatarAtime = 'avatar___childrenAuthorJson___avatar___atime',
  AvatarChildrenAuthorJsonAvatarAtimeMs = 'avatar___childrenAuthorJson___avatar___atimeMs',
  AvatarChildrenAuthorJsonAvatarBase = 'avatar___childrenAuthorJson___avatar___base',
  AvatarChildrenAuthorJsonAvatarBirthTime = 'avatar___childrenAuthorJson___avatar___birthTime',
  AvatarChildrenAuthorJsonAvatarBirthtime = 'avatar___childrenAuthorJson___avatar___birthtime',
  AvatarChildrenAuthorJsonAvatarBirthtimeMs = 'avatar___childrenAuthorJson___avatar___birthtimeMs',
  AvatarChildrenAuthorJsonAvatarBlksize = 'avatar___childrenAuthorJson___avatar___blksize',
  AvatarChildrenAuthorJsonAvatarBlocks = 'avatar___childrenAuthorJson___avatar___blocks',
  AvatarChildrenAuthorJsonAvatarChangeTime = 'avatar___childrenAuthorJson___avatar___changeTime',
  AvatarChildrenAuthorJsonAvatarChildren = 'avatar___childrenAuthorJson___avatar___children',
  AvatarChildrenAuthorJsonAvatarChildrenAuthorJson = 'avatar___childrenAuthorJson___avatar___childrenAuthorJson',
  AvatarChildrenAuthorJsonAvatarChildrenMarkdownRemark = 'avatar___childrenAuthorJson___avatar___childrenMarkdownRemark',
  AvatarChildrenAuthorJsonAvatarCtime = 'avatar___childrenAuthorJson___avatar___ctime',
  AvatarChildrenAuthorJsonAvatarCtimeMs = 'avatar___childrenAuthorJson___avatar___ctimeMs',
  AvatarChildrenAuthorJsonAvatarDev = 'avatar___childrenAuthorJson___avatar___dev',
  AvatarChildrenAuthorJsonAvatarDir = 'avatar___childrenAuthorJson___avatar___dir',
  AvatarChildrenAuthorJsonAvatarExt = 'avatar___childrenAuthorJson___avatar___ext',
  AvatarChildrenAuthorJsonAvatarExtension = 'avatar___childrenAuthorJson___avatar___extension',
  AvatarChildrenAuthorJsonAvatarGid = 'avatar___childrenAuthorJson___avatar___gid',
  AvatarChildrenAuthorJsonAvatarId = 'avatar___childrenAuthorJson___avatar___id',
  AvatarChildrenAuthorJsonAvatarIno = 'avatar___childrenAuthorJson___avatar___ino',
  AvatarChildrenAuthorJsonAvatarMode = 'avatar___childrenAuthorJson___avatar___mode',
  AvatarChildrenAuthorJsonAvatarModifiedTime = 'avatar___childrenAuthorJson___avatar___modifiedTime',
  AvatarChildrenAuthorJsonAvatarMtime = 'avatar___childrenAuthorJson___avatar___mtime',
  AvatarChildrenAuthorJsonAvatarMtimeMs = 'avatar___childrenAuthorJson___avatar___mtimeMs',
  AvatarChildrenAuthorJsonAvatarName = 'avatar___childrenAuthorJson___avatar___name',
  AvatarChildrenAuthorJsonAvatarNlink = 'avatar___childrenAuthorJson___avatar___nlink',
  AvatarChildrenAuthorJsonAvatarPrettySize = 'avatar___childrenAuthorJson___avatar___prettySize',
  AvatarChildrenAuthorJsonAvatarPublicUrl = 'avatar___childrenAuthorJson___avatar___publicURL',
  AvatarChildrenAuthorJsonAvatarRdev = 'avatar___childrenAuthorJson___avatar___rdev',
  AvatarChildrenAuthorJsonAvatarRelativeDirectory = 'avatar___childrenAuthorJson___avatar___relativeDirectory',
  AvatarChildrenAuthorJsonAvatarRelativePath = 'avatar___childrenAuthorJson___avatar___relativePath',
  AvatarChildrenAuthorJsonAvatarRoot = 'avatar___childrenAuthorJson___avatar___root',
  AvatarChildrenAuthorJsonAvatarSize = 'avatar___childrenAuthorJson___avatar___size',
  AvatarChildrenAuthorJsonAvatarSourceInstanceName = 'avatar___childrenAuthorJson___avatar___sourceInstanceName',
  AvatarChildrenAuthorJsonAvatarUid = 'avatar___childrenAuthorJson___avatar___uid',
  AvatarChildrenAuthorJsonBio = 'avatar___childrenAuthorJson___bio',
  AvatarChildrenAuthorJsonChildren = 'avatar___childrenAuthorJson___children',
  AvatarChildrenAuthorJsonChildrenChildren = 'avatar___childrenAuthorJson___children___children',
  AvatarChildrenAuthorJsonChildrenId = 'avatar___childrenAuthorJson___children___id',
  AvatarChildrenAuthorJsonGithub = 'avatar___childrenAuthorJson___github',
  AvatarChildrenAuthorJsonId = 'avatar___childrenAuthorJson___id',
  AvatarChildrenAuthorJsonInternalContent = 'avatar___childrenAuthorJson___internal___content',
  AvatarChildrenAuthorJsonInternalContentDigest = 'avatar___childrenAuthorJson___internal___contentDigest',
  AvatarChildrenAuthorJsonInternalDescription = 'avatar___childrenAuthorJson___internal___description',
  AvatarChildrenAuthorJsonInternalFieldOwners = 'avatar___childrenAuthorJson___internal___fieldOwners',
  AvatarChildrenAuthorJsonInternalIgnoreType = 'avatar___childrenAuthorJson___internal___ignoreType',
  AvatarChildrenAuthorJsonInternalMediaType = 'avatar___childrenAuthorJson___internal___mediaType',
  AvatarChildrenAuthorJsonInternalOwner = 'avatar___childrenAuthorJson___internal___owner',
  AvatarChildrenAuthorJsonInternalType = 'avatar___childrenAuthorJson___internal___type',
  AvatarChildrenAuthorJsonJsonId = 'avatar___childrenAuthorJson___jsonId',
  AvatarChildrenAuthorJsonName = 'avatar___childrenAuthorJson___name',
  AvatarChildrenAuthorJsonParentChildren = 'avatar___childrenAuthorJson___parent___children',
  AvatarChildrenAuthorJsonParentId = 'avatar___childrenAuthorJson___parent___id',
  AvatarChildrenAuthorJsonTwitter = 'avatar___childrenAuthorJson___twitter',
  AvatarChildrenMarkdownRemark = 'avatar___childrenMarkdownRemark',
  AvatarChildrenMarkdownRemarkChildren = 'avatar___childrenMarkdownRemark___children',
  AvatarChildrenMarkdownRemarkChildrenChildren = 'avatar___childrenMarkdownRemark___children___children',
  AvatarChildrenMarkdownRemarkChildrenId = 'avatar___childrenMarkdownRemark___children___id',
  AvatarChildrenMarkdownRemarkExcerpt = 'avatar___childrenMarkdownRemark___excerpt',
  AvatarChildrenMarkdownRemarkExcerptAst = 'avatar___childrenMarkdownRemark___excerptAst',
  AvatarChildrenMarkdownRemarkFieldsPageType = 'avatar___childrenMarkdownRemark___fields___pageType',
  AvatarChildrenMarkdownRemarkFieldsSlug = 'avatar___childrenMarkdownRemark___fields___slug',
  AvatarChildrenMarkdownRemarkFileAbsolutePath = 'avatar___childrenMarkdownRemark___fileAbsolutePath',
  AvatarChildrenMarkdownRemarkFrontmatterAuthors = 'avatar___childrenMarkdownRemark___frontmatter___authors',
  AvatarChildrenMarkdownRemarkFrontmatterBackgroundColor = 'avatar___childrenMarkdownRemark___frontmatter___backgroundColor',
  AvatarChildrenMarkdownRemarkFrontmatterDate = 'avatar___childrenMarkdownRemark___frontmatter___date',
  AvatarChildrenMarkdownRemarkFrontmatterTags = 'avatar___childrenMarkdownRemark___frontmatter___tags',
  AvatarChildrenMarkdownRemarkFrontmatterTitle = 'avatar___childrenMarkdownRemark___frontmatter___title',
  AvatarChildrenMarkdownRemarkHeadings = 'avatar___childrenMarkdownRemark___headings',
  AvatarChildrenMarkdownRemarkHeadingsDepth = 'avatar___childrenMarkdownRemark___headings___depth',
  AvatarChildrenMarkdownRemarkHeadingsId = 'avatar___childrenMarkdownRemark___headings___id',
  AvatarChildrenMarkdownRemarkHeadingsValue = 'avatar___childrenMarkdownRemark___headings___value',
  AvatarChildrenMarkdownRemarkHtml = 'avatar___childrenMarkdownRemark___html',
  AvatarChildrenMarkdownRemarkHtmlAst = 'avatar___childrenMarkdownRemark___htmlAst',
  AvatarChildrenMarkdownRemarkId = 'avatar___childrenMarkdownRemark___id',
  AvatarChildrenMarkdownRemarkInternalContent = 'avatar___childrenMarkdownRemark___internal___content',
  AvatarChildrenMarkdownRemarkInternalContentDigest = 'avatar___childrenMarkdownRemark___internal___contentDigest',
  AvatarChildrenMarkdownRemarkInternalDescription = 'avatar___childrenMarkdownRemark___internal___description',
  AvatarChildrenMarkdownRemarkInternalFieldOwners = 'avatar___childrenMarkdownRemark___internal___fieldOwners',
  AvatarChildrenMarkdownRemarkInternalIgnoreType = 'avatar___childrenMarkdownRemark___internal___ignoreType',
  AvatarChildrenMarkdownRemarkInternalMediaType = 'avatar___childrenMarkdownRemark___internal___mediaType',
  AvatarChildrenMarkdownRemarkInternalOwner = 'avatar___childrenMarkdownRemark___internal___owner',
  AvatarChildrenMarkdownRemarkInternalType = 'avatar___childrenMarkdownRemark___internal___type',
  AvatarChildrenMarkdownRemarkParentChildren = 'avatar___childrenMarkdownRemark___parent___children',
  AvatarChildrenMarkdownRemarkParentId = 'avatar___childrenMarkdownRemark___parent___id',
  AvatarChildrenMarkdownRemarkRawMarkdownBody = 'avatar___childrenMarkdownRemark___rawMarkdownBody',
  AvatarChildrenMarkdownRemarkTableOfContents = 'avatar___childrenMarkdownRemark___tableOfContents',
  AvatarChildrenMarkdownRemarkTimeToRead = 'avatar___childrenMarkdownRemark___timeToRead',
  AvatarChildrenMarkdownRemarkWordCountParagraphs = 'avatar___childrenMarkdownRemark___wordCount___paragraphs',
  AvatarChildrenMarkdownRemarkWordCountSentences = 'avatar___childrenMarkdownRemark___wordCount___sentences',
  AvatarChildrenMarkdownRemarkWordCountWords = 'avatar___childrenMarkdownRemark___wordCount___words',
  AvatarChildrenChildren = 'avatar___children___children',
  AvatarChildrenChildrenChildren = 'avatar___children___children___children',
  AvatarChildrenChildrenId = 'avatar___children___children___id',
  AvatarChildrenId = 'avatar___children___id',
  AvatarChildrenInternalContent = 'avatar___children___internal___content',
  AvatarChildrenInternalContentDigest = 'avatar___children___internal___contentDigest',
  AvatarChildrenInternalDescription = 'avatar___children___internal___description',
  AvatarChildrenInternalFieldOwners = 'avatar___children___internal___fieldOwners',
  AvatarChildrenInternalIgnoreType = 'avatar___children___internal___ignoreType',
  AvatarChildrenInternalMediaType = 'avatar___children___internal___mediaType',
  AvatarChildrenInternalOwner = 'avatar___children___internal___owner',
  AvatarChildrenInternalType = 'avatar___children___internal___type',
  AvatarChildrenParentChildren = 'avatar___children___parent___children',
  AvatarChildrenParentId = 'avatar___children___parent___id',
  AvatarCtime = 'avatar___ctime',
  AvatarCtimeMs = 'avatar___ctimeMs',
  AvatarDev = 'avatar___dev',
  AvatarDir = 'avatar___dir',
  AvatarExt = 'avatar___ext',
  AvatarExtension = 'avatar___extension',
  AvatarGid = 'avatar___gid',
  AvatarId = 'avatar___id',
  AvatarIno = 'avatar___ino',
  AvatarInternalContent = 'avatar___internal___content',
  AvatarInternalContentDigest = 'avatar___internal___contentDigest',
  AvatarInternalDescription = 'avatar___internal___description',
  AvatarInternalFieldOwners = 'avatar___internal___fieldOwners',
  AvatarInternalIgnoreType = 'avatar___internal___ignoreType',
  AvatarInternalMediaType = 'avatar___internal___mediaType',
  AvatarInternalOwner = 'avatar___internal___owner',
  AvatarInternalType = 'avatar___internal___type',
  AvatarMode = 'avatar___mode',
  AvatarModifiedTime = 'avatar___modifiedTime',
  AvatarMtime = 'avatar___mtime',
  AvatarMtimeMs = 'avatar___mtimeMs',
  AvatarName = 'avatar___name',
  AvatarNlink = 'avatar___nlink',
  AvatarParentChildren = 'avatar___parent___children',
  AvatarParentChildrenChildren = 'avatar___parent___children___children',
  AvatarParentChildrenId = 'avatar___parent___children___id',
  AvatarParentId = 'avatar___parent___id',
  AvatarParentInternalContent = 'avatar___parent___internal___content',
  AvatarParentInternalContentDigest = 'avatar___parent___internal___contentDigest',
  AvatarParentInternalDescription = 'avatar___parent___internal___description',
  AvatarParentInternalFieldOwners = 'avatar___parent___internal___fieldOwners',
  AvatarParentInternalIgnoreType = 'avatar___parent___internal___ignoreType',
  AvatarParentInternalMediaType = 'avatar___parent___internal___mediaType',
  AvatarParentInternalOwner = 'avatar___parent___internal___owner',
  AvatarParentInternalType = 'avatar___parent___internal___type',
  AvatarParentParentChildren = 'avatar___parent___parent___children',
  AvatarParentParentId = 'avatar___parent___parent___id',
  AvatarPrettySize = 'avatar___prettySize',
  AvatarPublicUrl = 'avatar___publicURL',
  AvatarRdev = 'avatar___rdev',
  AvatarRelativeDirectory = 'avatar___relativeDirectory',
  AvatarRelativePath = 'avatar___relativePath',
  AvatarRoot = 'avatar___root',
  AvatarSize = 'avatar___size',
  AvatarSourceInstanceName = 'avatar___sourceInstanceName',
  AvatarUid = 'avatar___uid',
  Bio = 'bio',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Github = 'github',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsonId = 'jsonId',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Twitter = 'twitter',
}

export type AuthorJsonFilterInput = {
  avatar?: Maybe<FileFilterInput>
  bio?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  github?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  jsonId?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  twitter?: Maybe<StringQueryOperatorInput>
}

export type AuthorJsonFilterListInput = {
  elemMatch?: Maybe<AuthorJsonFilterInput>
}

export type AuthorJsonGroupConnection = {
  __typename?: 'AuthorJsonGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<AuthorJsonEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<AuthorJsonGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<AuthorJson>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type AuthorJsonGroupConnectionDistinctArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonGroupConnectionGroupArgs = {
  field: AuthorJsonFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type AuthorJsonGroupConnectionMaxArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonGroupConnectionMinArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonGroupConnectionSumArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonSortInput = {
  fields?: Maybe<Array<Maybe<AuthorJsonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  ne?: Maybe<Scalars['Boolean']>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<DirectoryGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  __typename?: 'File'
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  changeTime: Scalars['Date']
  /** Returns the first child node of type AuthorJson or null if there are no children of given type on this node */
  childAuthorJson?: Maybe<AuthorJson>
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  children: Array<Node>
  /** Returns all children nodes filtered by type AuthorJson */
  childrenAuthorJson?: Maybe<Array<Maybe<AuthorJson>>>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent?: Maybe<Node>
  prettySize: Scalars['String']
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type FileAccessTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildAuthorJsonAvatarAbsolutePath = 'childAuthorJson___avatar___absolutePath',
  ChildAuthorJsonAvatarAccessTime = 'childAuthorJson___avatar___accessTime',
  ChildAuthorJsonAvatarAtime = 'childAuthorJson___avatar___atime',
  ChildAuthorJsonAvatarAtimeMs = 'childAuthorJson___avatar___atimeMs',
  ChildAuthorJsonAvatarBase = 'childAuthorJson___avatar___base',
  ChildAuthorJsonAvatarBirthTime = 'childAuthorJson___avatar___birthTime',
  ChildAuthorJsonAvatarBirthtime = 'childAuthorJson___avatar___birthtime',
  ChildAuthorJsonAvatarBirthtimeMs = 'childAuthorJson___avatar___birthtimeMs',
  ChildAuthorJsonAvatarBlksize = 'childAuthorJson___avatar___blksize',
  ChildAuthorJsonAvatarBlocks = 'childAuthorJson___avatar___blocks',
  ChildAuthorJsonAvatarChangeTime = 'childAuthorJson___avatar___changeTime',
  ChildAuthorJsonAvatarChildAuthorJsonBio = 'childAuthorJson___avatar___childAuthorJson___bio',
  ChildAuthorJsonAvatarChildAuthorJsonChildren = 'childAuthorJson___avatar___childAuthorJson___children',
  ChildAuthorJsonAvatarChildAuthorJsonGithub = 'childAuthorJson___avatar___childAuthorJson___github',
  ChildAuthorJsonAvatarChildAuthorJsonId = 'childAuthorJson___avatar___childAuthorJson___id',
  ChildAuthorJsonAvatarChildAuthorJsonJsonId = 'childAuthorJson___avatar___childAuthorJson___jsonId',
  ChildAuthorJsonAvatarChildAuthorJsonName = 'childAuthorJson___avatar___childAuthorJson___name',
  ChildAuthorJsonAvatarChildAuthorJsonTwitter = 'childAuthorJson___avatar___childAuthorJson___twitter',
  ChildAuthorJsonAvatarChildMarkdownRemarkChildren = 'childAuthorJson___avatar___childMarkdownRemark___children',
  ChildAuthorJsonAvatarChildMarkdownRemarkExcerpt = 'childAuthorJson___avatar___childMarkdownRemark___excerpt',
  ChildAuthorJsonAvatarChildMarkdownRemarkExcerptAst = 'childAuthorJson___avatar___childMarkdownRemark___excerptAst',
  ChildAuthorJsonAvatarChildMarkdownRemarkFileAbsolutePath = 'childAuthorJson___avatar___childMarkdownRemark___fileAbsolutePath',
  ChildAuthorJsonAvatarChildMarkdownRemarkHeadings = 'childAuthorJson___avatar___childMarkdownRemark___headings',
  ChildAuthorJsonAvatarChildMarkdownRemarkHtml = 'childAuthorJson___avatar___childMarkdownRemark___html',
  ChildAuthorJsonAvatarChildMarkdownRemarkHtmlAst = 'childAuthorJson___avatar___childMarkdownRemark___htmlAst',
  ChildAuthorJsonAvatarChildMarkdownRemarkId = 'childAuthorJson___avatar___childMarkdownRemark___id',
  ChildAuthorJsonAvatarChildMarkdownRemarkRawMarkdownBody = 'childAuthorJson___avatar___childMarkdownRemark___rawMarkdownBody',
  ChildAuthorJsonAvatarChildMarkdownRemarkTableOfContents = 'childAuthorJson___avatar___childMarkdownRemark___tableOfContents',
  ChildAuthorJsonAvatarChildMarkdownRemarkTimeToRead = 'childAuthorJson___avatar___childMarkdownRemark___timeToRead',
  ChildAuthorJsonAvatarChildren = 'childAuthorJson___avatar___children',
  ChildAuthorJsonAvatarChildrenAuthorJson = 'childAuthorJson___avatar___childrenAuthorJson',
  ChildAuthorJsonAvatarChildrenAuthorJsonBio = 'childAuthorJson___avatar___childrenAuthorJson___bio',
  ChildAuthorJsonAvatarChildrenAuthorJsonChildren = 'childAuthorJson___avatar___childrenAuthorJson___children',
  ChildAuthorJsonAvatarChildrenAuthorJsonGithub = 'childAuthorJson___avatar___childrenAuthorJson___github',
  ChildAuthorJsonAvatarChildrenAuthorJsonId = 'childAuthorJson___avatar___childrenAuthorJson___id',
  ChildAuthorJsonAvatarChildrenAuthorJsonJsonId = 'childAuthorJson___avatar___childrenAuthorJson___jsonId',
  ChildAuthorJsonAvatarChildrenAuthorJsonName = 'childAuthorJson___avatar___childrenAuthorJson___name',
  ChildAuthorJsonAvatarChildrenAuthorJsonTwitter = 'childAuthorJson___avatar___childrenAuthorJson___twitter',
  ChildAuthorJsonAvatarChildrenMarkdownRemark = 'childAuthorJson___avatar___childrenMarkdownRemark',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkChildren = 'childAuthorJson___avatar___childrenMarkdownRemark___children',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkExcerpt = 'childAuthorJson___avatar___childrenMarkdownRemark___excerpt',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkExcerptAst = 'childAuthorJson___avatar___childrenMarkdownRemark___excerptAst',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkFileAbsolutePath = 'childAuthorJson___avatar___childrenMarkdownRemark___fileAbsolutePath',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkHeadings = 'childAuthorJson___avatar___childrenMarkdownRemark___headings',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkHtml = 'childAuthorJson___avatar___childrenMarkdownRemark___html',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkHtmlAst = 'childAuthorJson___avatar___childrenMarkdownRemark___htmlAst',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkId = 'childAuthorJson___avatar___childrenMarkdownRemark___id',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkRawMarkdownBody = 'childAuthorJson___avatar___childrenMarkdownRemark___rawMarkdownBody',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkTableOfContents = 'childAuthorJson___avatar___childrenMarkdownRemark___tableOfContents',
  ChildAuthorJsonAvatarChildrenMarkdownRemarkTimeToRead = 'childAuthorJson___avatar___childrenMarkdownRemark___timeToRead',
  ChildAuthorJsonAvatarChildrenChildren = 'childAuthorJson___avatar___children___children',
  ChildAuthorJsonAvatarChildrenId = 'childAuthorJson___avatar___children___id',
  ChildAuthorJsonAvatarCtime = 'childAuthorJson___avatar___ctime',
  ChildAuthorJsonAvatarCtimeMs = 'childAuthorJson___avatar___ctimeMs',
  ChildAuthorJsonAvatarDev = 'childAuthorJson___avatar___dev',
  ChildAuthorJsonAvatarDir = 'childAuthorJson___avatar___dir',
  ChildAuthorJsonAvatarExt = 'childAuthorJson___avatar___ext',
  ChildAuthorJsonAvatarExtension = 'childAuthorJson___avatar___extension',
  ChildAuthorJsonAvatarGid = 'childAuthorJson___avatar___gid',
  ChildAuthorJsonAvatarId = 'childAuthorJson___avatar___id',
  ChildAuthorJsonAvatarIno = 'childAuthorJson___avatar___ino',
  ChildAuthorJsonAvatarInternalContent = 'childAuthorJson___avatar___internal___content',
  ChildAuthorJsonAvatarInternalContentDigest = 'childAuthorJson___avatar___internal___contentDigest',
  ChildAuthorJsonAvatarInternalDescription = 'childAuthorJson___avatar___internal___description',
  ChildAuthorJsonAvatarInternalFieldOwners = 'childAuthorJson___avatar___internal___fieldOwners',
  ChildAuthorJsonAvatarInternalIgnoreType = 'childAuthorJson___avatar___internal___ignoreType',
  ChildAuthorJsonAvatarInternalMediaType = 'childAuthorJson___avatar___internal___mediaType',
  ChildAuthorJsonAvatarInternalOwner = 'childAuthorJson___avatar___internal___owner',
  ChildAuthorJsonAvatarInternalType = 'childAuthorJson___avatar___internal___type',
  ChildAuthorJsonAvatarMode = 'childAuthorJson___avatar___mode',
  ChildAuthorJsonAvatarModifiedTime = 'childAuthorJson___avatar___modifiedTime',
  ChildAuthorJsonAvatarMtime = 'childAuthorJson___avatar___mtime',
  ChildAuthorJsonAvatarMtimeMs = 'childAuthorJson___avatar___mtimeMs',
  ChildAuthorJsonAvatarName = 'childAuthorJson___avatar___name',
  ChildAuthorJsonAvatarNlink = 'childAuthorJson___avatar___nlink',
  ChildAuthorJsonAvatarParentChildren = 'childAuthorJson___avatar___parent___children',
  ChildAuthorJsonAvatarParentId = 'childAuthorJson___avatar___parent___id',
  ChildAuthorJsonAvatarPrettySize = 'childAuthorJson___avatar___prettySize',
  ChildAuthorJsonAvatarPublicUrl = 'childAuthorJson___avatar___publicURL',
  ChildAuthorJsonAvatarRdev = 'childAuthorJson___avatar___rdev',
  ChildAuthorJsonAvatarRelativeDirectory = 'childAuthorJson___avatar___relativeDirectory',
  ChildAuthorJsonAvatarRelativePath = 'childAuthorJson___avatar___relativePath',
  ChildAuthorJsonAvatarRoot = 'childAuthorJson___avatar___root',
  ChildAuthorJsonAvatarSize = 'childAuthorJson___avatar___size',
  ChildAuthorJsonAvatarSourceInstanceName = 'childAuthorJson___avatar___sourceInstanceName',
  ChildAuthorJsonAvatarUid = 'childAuthorJson___avatar___uid',
  ChildAuthorJsonBio = 'childAuthorJson___bio',
  ChildAuthorJsonChildren = 'childAuthorJson___children',
  ChildAuthorJsonChildrenChildren = 'childAuthorJson___children___children',
  ChildAuthorJsonChildrenChildrenChildren = 'childAuthorJson___children___children___children',
  ChildAuthorJsonChildrenChildrenId = 'childAuthorJson___children___children___id',
  ChildAuthorJsonChildrenId = 'childAuthorJson___children___id',
  ChildAuthorJsonChildrenInternalContent = 'childAuthorJson___children___internal___content',
  ChildAuthorJsonChildrenInternalContentDigest = 'childAuthorJson___children___internal___contentDigest',
  ChildAuthorJsonChildrenInternalDescription = 'childAuthorJson___children___internal___description',
  ChildAuthorJsonChildrenInternalFieldOwners = 'childAuthorJson___children___internal___fieldOwners',
  ChildAuthorJsonChildrenInternalIgnoreType = 'childAuthorJson___children___internal___ignoreType',
  ChildAuthorJsonChildrenInternalMediaType = 'childAuthorJson___children___internal___mediaType',
  ChildAuthorJsonChildrenInternalOwner = 'childAuthorJson___children___internal___owner',
  ChildAuthorJsonChildrenInternalType = 'childAuthorJson___children___internal___type',
  ChildAuthorJsonChildrenParentChildren = 'childAuthorJson___children___parent___children',
  ChildAuthorJsonChildrenParentId = 'childAuthorJson___children___parent___id',
  ChildAuthorJsonGithub = 'childAuthorJson___github',
  ChildAuthorJsonId = 'childAuthorJson___id',
  ChildAuthorJsonInternalContent = 'childAuthorJson___internal___content',
  ChildAuthorJsonInternalContentDigest = 'childAuthorJson___internal___contentDigest',
  ChildAuthorJsonInternalDescription = 'childAuthorJson___internal___description',
  ChildAuthorJsonInternalFieldOwners = 'childAuthorJson___internal___fieldOwners',
  ChildAuthorJsonInternalIgnoreType = 'childAuthorJson___internal___ignoreType',
  ChildAuthorJsonInternalMediaType = 'childAuthorJson___internal___mediaType',
  ChildAuthorJsonInternalOwner = 'childAuthorJson___internal___owner',
  ChildAuthorJsonInternalType = 'childAuthorJson___internal___type',
  ChildAuthorJsonJsonId = 'childAuthorJson___jsonId',
  ChildAuthorJsonName = 'childAuthorJson___name',
  ChildAuthorJsonParentChildren = 'childAuthorJson___parent___children',
  ChildAuthorJsonParentChildrenChildren = 'childAuthorJson___parent___children___children',
  ChildAuthorJsonParentChildrenId = 'childAuthorJson___parent___children___id',
  ChildAuthorJsonParentId = 'childAuthorJson___parent___id',
  ChildAuthorJsonParentInternalContent = 'childAuthorJson___parent___internal___content',
  ChildAuthorJsonParentInternalContentDigest = 'childAuthorJson___parent___internal___contentDigest',
  ChildAuthorJsonParentInternalDescription = 'childAuthorJson___parent___internal___description',
  ChildAuthorJsonParentInternalFieldOwners = 'childAuthorJson___parent___internal___fieldOwners',
  ChildAuthorJsonParentInternalIgnoreType = 'childAuthorJson___parent___internal___ignoreType',
  ChildAuthorJsonParentInternalMediaType = 'childAuthorJson___parent___internal___mediaType',
  ChildAuthorJsonParentInternalOwner = 'childAuthorJson___parent___internal___owner',
  ChildAuthorJsonParentInternalType = 'childAuthorJson___parent___internal___type',
  ChildAuthorJsonParentParentChildren = 'childAuthorJson___parent___parent___children',
  ChildAuthorJsonParentParentId = 'childAuthorJson___parent___parent___id',
  ChildAuthorJsonTwitter = 'childAuthorJson___twitter',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFieldsPageType = 'childMarkdownRemark___fields___pageType',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFrontmatterAuthors = 'childMarkdownRemark___frontmatter___authors',
  ChildMarkdownRemarkFrontmatterAuthorsBio = 'childMarkdownRemark___frontmatter___authors___bio',
  ChildMarkdownRemarkFrontmatterAuthorsChildren = 'childMarkdownRemark___frontmatter___authors___children',
  ChildMarkdownRemarkFrontmatterAuthorsGithub = 'childMarkdownRemark___frontmatter___authors___github',
  ChildMarkdownRemarkFrontmatterAuthorsId = 'childMarkdownRemark___frontmatter___authors___id',
  ChildMarkdownRemarkFrontmatterAuthorsJsonId = 'childMarkdownRemark___frontmatter___authors___jsonId',
  ChildMarkdownRemarkFrontmatterAuthorsName = 'childMarkdownRemark___frontmatter___authors___name',
  ChildMarkdownRemarkFrontmatterAuthorsTwitter = 'childMarkdownRemark___frontmatter___authors___twitter',
  ChildMarkdownRemarkFrontmatterBackgroundColor = 'childMarkdownRemark___frontmatter___backgroundColor',
  ChildMarkdownRemarkFrontmatterBackgroundImageAbsolutePath = 'childMarkdownRemark___frontmatter___backgroundImage___absolutePath',
  ChildMarkdownRemarkFrontmatterBackgroundImageAccessTime = 'childMarkdownRemark___frontmatter___backgroundImage___accessTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageAtime = 'childMarkdownRemark___frontmatter___backgroundImage___atime',
  ChildMarkdownRemarkFrontmatterBackgroundImageAtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___atimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageBase = 'childMarkdownRemark___frontmatter___backgroundImage___base',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthTime = 'childMarkdownRemark___frontmatter___backgroundImage___birthTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthtime = 'childMarkdownRemark___frontmatter___backgroundImage___birthtime',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageBlksize = 'childMarkdownRemark___frontmatter___backgroundImage___blksize',
  ChildMarkdownRemarkFrontmatterBackgroundImageBlocks = 'childMarkdownRemark___frontmatter___backgroundImage___blocks',
  ChildMarkdownRemarkFrontmatterBackgroundImageChangeTime = 'childMarkdownRemark___frontmatter___backgroundImage___changeTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageChildren = 'childMarkdownRemark___frontmatter___backgroundImage___children',
  ChildMarkdownRemarkFrontmatterBackgroundImageChildrenAuthorJson = 'childMarkdownRemark___frontmatter___backgroundImage___childrenAuthorJson',
  ChildMarkdownRemarkFrontmatterBackgroundImageChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___backgroundImage___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterBackgroundImageCtime = 'childMarkdownRemark___frontmatter___backgroundImage___ctime',
  ChildMarkdownRemarkFrontmatterBackgroundImageCtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageDev = 'childMarkdownRemark___frontmatter___backgroundImage___dev',
  ChildMarkdownRemarkFrontmatterBackgroundImageDir = 'childMarkdownRemark___frontmatter___backgroundImage___dir',
  ChildMarkdownRemarkFrontmatterBackgroundImageExt = 'childMarkdownRemark___frontmatter___backgroundImage___ext',
  ChildMarkdownRemarkFrontmatterBackgroundImageExtension = 'childMarkdownRemark___frontmatter___backgroundImage___extension',
  ChildMarkdownRemarkFrontmatterBackgroundImageGid = 'childMarkdownRemark___frontmatter___backgroundImage___gid',
  ChildMarkdownRemarkFrontmatterBackgroundImageId = 'childMarkdownRemark___frontmatter___backgroundImage___id',
  ChildMarkdownRemarkFrontmatterBackgroundImageIno = 'childMarkdownRemark___frontmatter___backgroundImage___ino',
  ChildMarkdownRemarkFrontmatterBackgroundImageMode = 'childMarkdownRemark___frontmatter___backgroundImage___mode',
  ChildMarkdownRemarkFrontmatterBackgroundImageModifiedTime = 'childMarkdownRemark___frontmatter___backgroundImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageMtime = 'childMarkdownRemark___frontmatter___backgroundImage___mtime',
  ChildMarkdownRemarkFrontmatterBackgroundImageMtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageName = 'childMarkdownRemark___frontmatter___backgroundImage___name',
  ChildMarkdownRemarkFrontmatterBackgroundImageNlink = 'childMarkdownRemark___frontmatter___backgroundImage___nlink',
  ChildMarkdownRemarkFrontmatterBackgroundImagePrettySize = 'childMarkdownRemark___frontmatter___backgroundImage___prettySize',
  ChildMarkdownRemarkFrontmatterBackgroundImagePublicUrl = 'childMarkdownRemark___frontmatter___backgroundImage___publicURL',
  ChildMarkdownRemarkFrontmatterBackgroundImageRdev = 'childMarkdownRemark___frontmatter___backgroundImage___rdev',
  ChildMarkdownRemarkFrontmatterBackgroundImageRelativeDirectory = 'childMarkdownRemark___frontmatter___backgroundImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterBackgroundImageRelativePath = 'childMarkdownRemark___frontmatter___backgroundImage___relativePath',
  ChildMarkdownRemarkFrontmatterBackgroundImageRoot = 'childMarkdownRemark___frontmatter___backgroundImage___root',
  ChildMarkdownRemarkFrontmatterBackgroundImageSize = 'childMarkdownRemark___frontmatter___backgroundImage___size',
  ChildMarkdownRemarkFrontmatterBackgroundImageSourceInstanceName = 'childMarkdownRemark___frontmatter___backgroundImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterBackgroundImageUid = 'childMarkdownRemark___frontmatter___backgroundImage___uid',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenAuthorJson = 'childrenAuthorJson',
  ChildrenAuthorJsonAvatarAbsolutePath = 'childrenAuthorJson___avatar___absolutePath',
  ChildrenAuthorJsonAvatarAccessTime = 'childrenAuthorJson___avatar___accessTime',
  ChildrenAuthorJsonAvatarAtime = 'childrenAuthorJson___avatar___atime',
  ChildrenAuthorJsonAvatarAtimeMs = 'childrenAuthorJson___avatar___atimeMs',
  ChildrenAuthorJsonAvatarBase = 'childrenAuthorJson___avatar___base',
  ChildrenAuthorJsonAvatarBirthTime = 'childrenAuthorJson___avatar___birthTime',
  ChildrenAuthorJsonAvatarBirthtime = 'childrenAuthorJson___avatar___birthtime',
  ChildrenAuthorJsonAvatarBirthtimeMs = 'childrenAuthorJson___avatar___birthtimeMs',
  ChildrenAuthorJsonAvatarBlksize = 'childrenAuthorJson___avatar___blksize',
  ChildrenAuthorJsonAvatarBlocks = 'childrenAuthorJson___avatar___blocks',
  ChildrenAuthorJsonAvatarChangeTime = 'childrenAuthorJson___avatar___changeTime',
  ChildrenAuthorJsonAvatarChildAuthorJsonBio = 'childrenAuthorJson___avatar___childAuthorJson___bio',
  ChildrenAuthorJsonAvatarChildAuthorJsonChildren = 'childrenAuthorJson___avatar___childAuthorJson___children',
  ChildrenAuthorJsonAvatarChildAuthorJsonGithub = 'childrenAuthorJson___avatar___childAuthorJson___github',
  ChildrenAuthorJsonAvatarChildAuthorJsonId = 'childrenAuthorJson___avatar___childAuthorJson___id',
  ChildrenAuthorJsonAvatarChildAuthorJsonJsonId = 'childrenAuthorJson___avatar___childAuthorJson___jsonId',
  ChildrenAuthorJsonAvatarChildAuthorJsonName = 'childrenAuthorJson___avatar___childAuthorJson___name',
  ChildrenAuthorJsonAvatarChildAuthorJsonTwitter = 'childrenAuthorJson___avatar___childAuthorJson___twitter',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkChildren = 'childrenAuthorJson___avatar___childMarkdownRemark___children',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkExcerpt = 'childrenAuthorJson___avatar___childMarkdownRemark___excerpt',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkExcerptAst = 'childrenAuthorJson___avatar___childMarkdownRemark___excerptAst',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkFileAbsolutePath = 'childrenAuthorJson___avatar___childMarkdownRemark___fileAbsolutePath',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkHeadings = 'childrenAuthorJson___avatar___childMarkdownRemark___headings',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkHtml = 'childrenAuthorJson___avatar___childMarkdownRemark___html',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkHtmlAst = 'childrenAuthorJson___avatar___childMarkdownRemark___htmlAst',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkId = 'childrenAuthorJson___avatar___childMarkdownRemark___id',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkRawMarkdownBody = 'childrenAuthorJson___avatar___childMarkdownRemark___rawMarkdownBody',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkTableOfContents = 'childrenAuthorJson___avatar___childMarkdownRemark___tableOfContents',
  ChildrenAuthorJsonAvatarChildMarkdownRemarkTimeToRead = 'childrenAuthorJson___avatar___childMarkdownRemark___timeToRead',
  ChildrenAuthorJsonAvatarChildren = 'childrenAuthorJson___avatar___children',
  ChildrenAuthorJsonAvatarChildrenAuthorJson = 'childrenAuthorJson___avatar___childrenAuthorJson',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonBio = 'childrenAuthorJson___avatar___childrenAuthorJson___bio',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonChildren = 'childrenAuthorJson___avatar___childrenAuthorJson___children',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonGithub = 'childrenAuthorJson___avatar___childrenAuthorJson___github',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonId = 'childrenAuthorJson___avatar___childrenAuthorJson___id',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonJsonId = 'childrenAuthorJson___avatar___childrenAuthorJson___jsonId',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonName = 'childrenAuthorJson___avatar___childrenAuthorJson___name',
  ChildrenAuthorJsonAvatarChildrenAuthorJsonTwitter = 'childrenAuthorJson___avatar___childrenAuthorJson___twitter',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemark = 'childrenAuthorJson___avatar___childrenMarkdownRemark',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkChildren = 'childrenAuthorJson___avatar___childrenMarkdownRemark___children',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkExcerpt = 'childrenAuthorJson___avatar___childrenMarkdownRemark___excerpt',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkExcerptAst = 'childrenAuthorJson___avatar___childrenMarkdownRemark___excerptAst',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkFileAbsolutePath = 'childrenAuthorJson___avatar___childrenMarkdownRemark___fileAbsolutePath',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkHeadings = 'childrenAuthorJson___avatar___childrenMarkdownRemark___headings',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkHtml = 'childrenAuthorJson___avatar___childrenMarkdownRemark___html',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkHtmlAst = 'childrenAuthorJson___avatar___childrenMarkdownRemark___htmlAst',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkId = 'childrenAuthorJson___avatar___childrenMarkdownRemark___id',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkRawMarkdownBody = 'childrenAuthorJson___avatar___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkTableOfContents = 'childrenAuthorJson___avatar___childrenMarkdownRemark___tableOfContents',
  ChildrenAuthorJsonAvatarChildrenMarkdownRemarkTimeToRead = 'childrenAuthorJson___avatar___childrenMarkdownRemark___timeToRead',
  ChildrenAuthorJsonAvatarChildrenChildren = 'childrenAuthorJson___avatar___children___children',
  ChildrenAuthorJsonAvatarChildrenId = 'childrenAuthorJson___avatar___children___id',
  ChildrenAuthorJsonAvatarCtime = 'childrenAuthorJson___avatar___ctime',
  ChildrenAuthorJsonAvatarCtimeMs = 'childrenAuthorJson___avatar___ctimeMs',
  ChildrenAuthorJsonAvatarDev = 'childrenAuthorJson___avatar___dev',
  ChildrenAuthorJsonAvatarDir = 'childrenAuthorJson___avatar___dir',
  ChildrenAuthorJsonAvatarExt = 'childrenAuthorJson___avatar___ext',
  ChildrenAuthorJsonAvatarExtension = 'childrenAuthorJson___avatar___extension',
  ChildrenAuthorJsonAvatarGid = 'childrenAuthorJson___avatar___gid',
  ChildrenAuthorJsonAvatarId = 'childrenAuthorJson___avatar___id',
  ChildrenAuthorJsonAvatarIno = 'childrenAuthorJson___avatar___ino',
  ChildrenAuthorJsonAvatarInternalContent = 'childrenAuthorJson___avatar___internal___content',
  ChildrenAuthorJsonAvatarInternalContentDigest = 'childrenAuthorJson___avatar___internal___contentDigest',
  ChildrenAuthorJsonAvatarInternalDescription = 'childrenAuthorJson___avatar___internal___description',
  ChildrenAuthorJsonAvatarInternalFieldOwners = 'childrenAuthorJson___avatar___internal___fieldOwners',
  ChildrenAuthorJsonAvatarInternalIgnoreType = 'childrenAuthorJson___avatar___internal___ignoreType',
  ChildrenAuthorJsonAvatarInternalMediaType = 'childrenAuthorJson___avatar___internal___mediaType',
  ChildrenAuthorJsonAvatarInternalOwner = 'childrenAuthorJson___avatar___internal___owner',
  ChildrenAuthorJsonAvatarInternalType = 'childrenAuthorJson___avatar___internal___type',
  ChildrenAuthorJsonAvatarMode = 'childrenAuthorJson___avatar___mode',
  ChildrenAuthorJsonAvatarModifiedTime = 'childrenAuthorJson___avatar___modifiedTime',
  ChildrenAuthorJsonAvatarMtime = 'childrenAuthorJson___avatar___mtime',
  ChildrenAuthorJsonAvatarMtimeMs = 'childrenAuthorJson___avatar___mtimeMs',
  ChildrenAuthorJsonAvatarName = 'childrenAuthorJson___avatar___name',
  ChildrenAuthorJsonAvatarNlink = 'childrenAuthorJson___avatar___nlink',
  ChildrenAuthorJsonAvatarParentChildren = 'childrenAuthorJson___avatar___parent___children',
  ChildrenAuthorJsonAvatarParentId = 'childrenAuthorJson___avatar___parent___id',
  ChildrenAuthorJsonAvatarPrettySize = 'childrenAuthorJson___avatar___prettySize',
  ChildrenAuthorJsonAvatarPublicUrl = 'childrenAuthorJson___avatar___publicURL',
  ChildrenAuthorJsonAvatarRdev = 'childrenAuthorJson___avatar___rdev',
  ChildrenAuthorJsonAvatarRelativeDirectory = 'childrenAuthorJson___avatar___relativeDirectory',
  ChildrenAuthorJsonAvatarRelativePath = 'childrenAuthorJson___avatar___relativePath',
  ChildrenAuthorJsonAvatarRoot = 'childrenAuthorJson___avatar___root',
  ChildrenAuthorJsonAvatarSize = 'childrenAuthorJson___avatar___size',
  ChildrenAuthorJsonAvatarSourceInstanceName = 'childrenAuthorJson___avatar___sourceInstanceName',
  ChildrenAuthorJsonAvatarUid = 'childrenAuthorJson___avatar___uid',
  ChildrenAuthorJsonBio = 'childrenAuthorJson___bio',
  ChildrenAuthorJsonChildren = 'childrenAuthorJson___children',
  ChildrenAuthorJsonChildrenChildren = 'childrenAuthorJson___children___children',
  ChildrenAuthorJsonChildrenChildrenChildren = 'childrenAuthorJson___children___children___children',
  ChildrenAuthorJsonChildrenChildrenId = 'childrenAuthorJson___children___children___id',
  ChildrenAuthorJsonChildrenId = 'childrenAuthorJson___children___id',
  ChildrenAuthorJsonChildrenInternalContent = 'childrenAuthorJson___children___internal___content',
  ChildrenAuthorJsonChildrenInternalContentDigest = 'childrenAuthorJson___children___internal___contentDigest',
  ChildrenAuthorJsonChildrenInternalDescription = 'childrenAuthorJson___children___internal___description',
  ChildrenAuthorJsonChildrenInternalFieldOwners = 'childrenAuthorJson___children___internal___fieldOwners',
  ChildrenAuthorJsonChildrenInternalIgnoreType = 'childrenAuthorJson___children___internal___ignoreType',
  ChildrenAuthorJsonChildrenInternalMediaType = 'childrenAuthorJson___children___internal___mediaType',
  ChildrenAuthorJsonChildrenInternalOwner = 'childrenAuthorJson___children___internal___owner',
  ChildrenAuthorJsonChildrenInternalType = 'childrenAuthorJson___children___internal___type',
  ChildrenAuthorJsonChildrenParentChildren = 'childrenAuthorJson___children___parent___children',
  ChildrenAuthorJsonChildrenParentId = 'childrenAuthorJson___children___parent___id',
  ChildrenAuthorJsonGithub = 'childrenAuthorJson___github',
  ChildrenAuthorJsonId = 'childrenAuthorJson___id',
  ChildrenAuthorJsonInternalContent = 'childrenAuthorJson___internal___content',
  ChildrenAuthorJsonInternalContentDigest = 'childrenAuthorJson___internal___contentDigest',
  ChildrenAuthorJsonInternalDescription = 'childrenAuthorJson___internal___description',
  ChildrenAuthorJsonInternalFieldOwners = 'childrenAuthorJson___internal___fieldOwners',
  ChildrenAuthorJsonInternalIgnoreType = 'childrenAuthorJson___internal___ignoreType',
  ChildrenAuthorJsonInternalMediaType = 'childrenAuthorJson___internal___mediaType',
  ChildrenAuthorJsonInternalOwner = 'childrenAuthorJson___internal___owner',
  ChildrenAuthorJsonInternalType = 'childrenAuthorJson___internal___type',
  ChildrenAuthorJsonJsonId = 'childrenAuthorJson___jsonId',
  ChildrenAuthorJsonName = 'childrenAuthorJson___name',
  ChildrenAuthorJsonParentChildren = 'childrenAuthorJson___parent___children',
  ChildrenAuthorJsonParentChildrenChildren = 'childrenAuthorJson___parent___children___children',
  ChildrenAuthorJsonParentChildrenId = 'childrenAuthorJson___parent___children___id',
  ChildrenAuthorJsonParentId = 'childrenAuthorJson___parent___id',
  ChildrenAuthorJsonParentInternalContent = 'childrenAuthorJson___parent___internal___content',
  ChildrenAuthorJsonParentInternalContentDigest = 'childrenAuthorJson___parent___internal___contentDigest',
  ChildrenAuthorJsonParentInternalDescription = 'childrenAuthorJson___parent___internal___description',
  ChildrenAuthorJsonParentInternalFieldOwners = 'childrenAuthorJson___parent___internal___fieldOwners',
  ChildrenAuthorJsonParentInternalIgnoreType = 'childrenAuthorJson___parent___internal___ignoreType',
  ChildrenAuthorJsonParentInternalMediaType = 'childrenAuthorJson___parent___internal___mediaType',
  ChildrenAuthorJsonParentInternalOwner = 'childrenAuthorJson___parent___internal___owner',
  ChildrenAuthorJsonParentInternalType = 'childrenAuthorJson___parent___internal___type',
  ChildrenAuthorJsonParentParentChildren = 'childrenAuthorJson___parent___parent___children',
  ChildrenAuthorJsonParentParentId = 'childrenAuthorJson___parent___parent___id',
  ChildrenAuthorJsonTwitter = 'childrenAuthorJson___twitter',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFieldsPageType = 'childrenMarkdownRemark___fields___pageType',
  ChildrenMarkdownRemarkFieldsSlug = 'childrenMarkdownRemark___fields___slug',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkFrontmatterAuthors = 'childrenMarkdownRemark___frontmatter___authors',
  ChildrenMarkdownRemarkFrontmatterAuthorsBio = 'childrenMarkdownRemark___frontmatter___authors___bio',
  ChildrenMarkdownRemarkFrontmatterAuthorsChildren = 'childrenMarkdownRemark___frontmatter___authors___children',
  ChildrenMarkdownRemarkFrontmatterAuthorsGithub = 'childrenMarkdownRemark___frontmatter___authors___github',
  ChildrenMarkdownRemarkFrontmatterAuthorsId = 'childrenMarkdownRemark___frontmatter___authors___id',
  ChildrenMarkdownRemarkFrontmatterAuthorsJsonId = 'childrenMarkdownRemark___frontmatter___authors___jsonId',
  ChildrenMarkdownRemarkFrontmatterAuthorsName = 'childrenMarkdownRemark___frontmatter___authors___name',
  ChildrenMarkdownRemarkFrontmatterAuthorsTwitter = 'childrenMarkdownRemark___frontmatter___authors___twitter',
  ChildrenMarkdownRemarkFrontmatterBackgroundColor = 'childrenMarkdownRemark___frontmatter___backgroundColor',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageAbsolutePath = 'childrenMarkdownRemark___frontmatter___backgroundImage___absolutePath',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageAccessTime = 'childrenMarkdownRemark___frontmatter___backgroundImage___accessTime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageAtime = 'childrenMarkdownRemark___frontmatter___backgroundImage___atime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageAtimeMs = 'childrenMarkdownRemark___frontmatter___backgroundImage___atimeMs',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBase = 'childrenMarkdownRemark___frontmatter___backgroundImage___base',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBirthTime = 'childrenMarkdownRemark___frontmatter___backgroundImage___birthTime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBirthtime = 'childrenMarkdownRemark___frontmatter___backgroundImage___birthtime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBirthtimeMs = 'childrenMarkdownRemark___frontmatter___backgroundImage___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBlksize = 'childrenMarkdownRemark___frontmatter___backgroundImage___blksize',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageBlocks = 'childrenMarkdownRemark___frontmatter___backgroundImage___blocks',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageChangeTime = 'childrenMarkdownRemark___frontmatter___backgroundImage___changeTime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageChildren = 'childrenMarkdownRemark___frontmatter___backgroundImage___children',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageChildrenAuthorJson = 'childrenMarkdownRemark___frontmatter___backgroundImage___childrenAuthorJson',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___backgroundImage___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageCtime = 'childrenMarkdownRemark___frontmatter___backgroundImage___ctime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageCtimeMs = 'childrenMarkdownRemark___frontmatter___backgroundImage___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageDev = 'childrenMarkdownRemark___frontmatter___backgroundImage___dev',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageDir = 'childrenMarkdownRemark___frontmatter___backgroundImage___dir',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageExt = 'childrenMarkdownRemark___frontmatter___backgroundImage___ext',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageExtension = 'childrenMarkdownRemark___frontmatter___backgroundImage___extension',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageGid = 'childrenMarkdownRemark___frontmatter___backgroundImage___gid',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageId = 'childrenMarkdownRemark___frontmatter___backgroundImage___id',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageIno = 'childrenMarkdownRemark___frontmatter___backgroundImage___ino',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageMode = 'childrenMarkdownRemark___frontmatter___backgroundImage___mode',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageModifiedTime = 'childrenMarkdownRemark___frontmatter___backgroundImage___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageMtime = 'childrenMarkdownRemark___frontmatter___backgroundImage___mtime',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageMtimeMs = 'childrenMarkdownRemark___frontmatter___backgroundImage___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageName = 'childrenMarkdownRemark___frontmatter___backgroundImage___name',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageNlink = 'childrenMarkdownRemark___frontmatter___backgroundImage___nlink',
  ChildrenMarkdownRemarkFrontmatterBackgroundImagePrettySize = 'childrenMarkdownRemark___frontmatter___backgroundImage___prettySize',
  ChildrenMarkdownRemarkFrontmatterBackgroundImagePublicUrl = 'childrenMarkdownRemark___frontmatter___backgroundImage___publicURL',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageRdev = 'childrenMarkdownRemark___frontmatter___backgroundImage___rdev',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageRelativeDirectory = 'childrenMarkdownRemark___frontmatter___backgroundImage___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageRelativePath = 'childrenMarkdownRemark___frontmatter___backgroundImage___relativePath',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageRoot = 'childrenMarkdownRemark___frontmatter___backgroundImage___root',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageSize = 'childrenMarkdownRemark___frontmatter___backgroundImage___size',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageSourceInstanceName = 'childrenMarkdownRemark___frontmatter___backgroundImage___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterBackgroundImageUid = 'childrenMarkdownRemark___frontmatter___backgroundImage___uid',
  ChildrenMarkdownRemarkFrontmatterDate = 'childrenMarkdownRemark___frontmatter___date',
  ChildrenMarkdownRemarkFrontmatterTags = 'childrenMarkdownRemark___frontmatter___tags',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type FileFilterInput = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  childAuthorJson?: Maybe<AuthorJsonFilterInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  children?: Maybe<NodeFilterListInput>
  childrenAuthorJson?: Maybe<AuthorJsonFilterListInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<FileGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  ne?: Maybe<Scalars['JSON']>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
}

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading'
  depth?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type MarkdownHeadingFilterInput = {
  depth?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark'
  children: Array<Node>
  excerpt?: Maybe<Scalars['String']>
  excerptAst?: Maybe<Scalars['JSON']>
  fields?: Maybe<MarkdownRemarkFields>
  fileAbsolutePath?: Maybe<Scalars['String']>
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
  rawMarkdownBody?: Maybe<Scalars['String']>
  tableOfContents?: Maybe<Scalars['String']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MarkdownWordCount>
}

export type MarkdownRemarkExcerptArgs = {
  format?: Maybe<MarkdownExcerptFormats>
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>
  heading?: Maybe<Scalars['String']>
  maxDepth?: Maybe<Scalars['Int']>
  pathToSlugField?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge'
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields'
  pageType?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FieldsPageType = 'fields___pageType',
  FieldsSlug = 'fields___slug',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterAuthors = 'frontmatter___authors',
  FrontmatterAuthorsAvatarAbsolutePath = 'frontmatter___authors___avatar___absolutePath',
  FrontmatterAuthorsAvatarAccessTime = 'frontmatter___authors___avatar___accessTime',
  FrontmatterAuthorsAvatarAtime = 'frontmatter___authors___avatar___atime',
  FrontmatterAuthorsAvatarAtimeMs = 'frontmatter___authors___avatar___atimeMs',
  FrontmatterAuthorsAvatarBase = 'frontmatter___authors___avatar___base',
  FrontmatterAuthorsAvatarBirthTime = 'frontmatter___authors___avatar___birthTime',
  FrontmatterAuthorsAvatarBirthtime = 'frontmatter___authors___avatar___birthtime',
  FrontmatterAuthorsAvatarBirthtimeMs = 'frontmatter___authors___avatar___birthtimeMs',
  FrontmatterAuthorsAvatarBlksize = 'frontmatter___authors___avatar___blksize',
  FrontmatterAuthorsAvatarBlocks = 'frontmatter___authors___avatar___blocks',
  FrontmatterAuthorsAvatarChangeTime = 'frontmatter___authors___avatar___changeTime',
  FrontmatterAuthorsAvatarChildren = 'frontmatter___authors___avatar___children',
  FrontmatterAuthorsAvatarChildrenAuthorJson = 'frontmatter___authors___avatar___childrenAuthorJson',
  FrontmatterAuthorsAvatarChildrenMarkdownRemark = 'frontmatter___authors___avatar___childrenMarkdownRemark',
  FrontmatterAuthorsAvatarCtime = 'frontmatter___authors___avatar___ctime',
  FrontmatterAuthorsAvatarCtimeMs = 'frontmatter___authors___avatar___ctimeMs',
  FrontmatterAuthorsAvatarDev = 'frontmatter___authors___avatar___dev',
  FrontmatterAuthorsAvatarDir = 'frontmatter___authors___avatar___dir',
  FrontmatterAuthorsAvatarExt = 'frontmatter___authors___avatar___ext',
  FrontmatterAuthorsAvatarExtension = 'frontmatter___authors___avatar___extension',
  FrontmatterAuthorsAvatarGid = 'frontmatter___authors___avatar___gid',
  FrontmatterAuthorsAvatarId = 'frontmatter___authors___avatar___id',
  FrontmatterAuthorsAvatarIno = 'frontmatter___authors___avatar___ino',
  FrontmatterAuthorsAvatarMode = 'frontmatter___authors___avatar___mode',
  FrontmatterAuthorsAvatarModifiedTime = 'frontmatter___authors___avatar___modifiedTime',
  FrontmatterAuthorsAvatarMtime = 'frontmatter___authors___avatar___mtime',
  FrontmatterAuthorsAvatarMtimeMs = 'frontmatter___authors___avatar___mtimeMs',
  FrontmatterAuthorsAvatarName = 'frontmatter___authors___avatar___name',
  FrontmatterAuthorsAvatarNlink = 'frontmatter___authors___avatar___nlink',
  FrontmatterAuthorsAvatarPrettySize = 'frontmatter___authors___avatar___prettySize',
  FrontmatterAuthorsAvatarPublicUrl = 'frontmatter___authors___avatar___publicURL',
  FrontmatterAuthorsAvatarRdev = 'frontmatter___authors___avatar___rdev',
  FrontmatterAuthorsAvatarRelativeDirectory = 'frontmatter___authors___avatar___relativeDirectory',
  FrontmatterAuthorsAvatarRelativePath = 'frontmatter___authors___avatar___relativePath',
  FrontmatterAuthorsAvatarRoot = 'frontmatter___authors___avatar___root',
  FrontmatterAuthorsAvatarSize = 'frontmatter___authors___avatar___size',
  FrontmatterAuthorsAvatarSourceInstanceName = 'frontmatter___authors___avatar___sourceInstanceName',
  FrontmatterAuthorsAvatarUid = 'frontmatter___authors___avatar___uid',
  FrontmatterAuthorsBio = 'frontmatter___authors___bio',
  FrontmatterAuthorsChildren = 'frontmatter___authors___children',
  FrontmatterAuthorsChildrenChildren = 'frontmatter___authors___children___children',
  FrontmatterAuthorsChildrenId = 'frontmatter___authors___children___id',
  FrontmatterAuthorsGithub = 'frontmatter___authors___github',
  FrontmatterAuthorsId = 'frontmatter___authors___id',
  FrontmatterAuthorsInternalContent = 'frontmatter___authors___internal___content',
  FrontmatterAuthorsInternalContentDigest = 'frontmatter___authors___internal___contentDigest',
  FrontmatterAuthorsInternalDescription = 'frontmatter___authors___internal___description',
  FrontmatterAuthorsInternalFieldOwners = 'frontmatter___authors___internal___fieldOwners',
  FrontmatterAuthorsInternalIgnoreType = 'frontmatter___authors___internal___ignoreType',
  FrontmatterAuthorsInternalMediaType = 'frontmatter___authors___internal___mediaType',
  FrontmatterAuthorsInternalOwner = 'frontmatter___authors___internal___owner',
  FrontmatterAuthorsInternalType = 'frontmatter___authors___internal___type',
  FrontmatterAuthorsJsonId = 'frontmatter___authors___jsonId',
  FrontmatterAuthorsName = 'frontmatter___authors___name',
  FrontmatterAuthorsParentChildren = 'frontmatter___authors___parent___children',
  FrontmatterAuthorsParentId = 'frontmatter___authors___parent___id',
  FrontmatterAuthorsTwitter = 'frontmatter___authors___twitter',
  FrontmatterBackgroundColor = 'frontmatter___backgroundColor',
  FrontmatterBackgroundImageAbsolutePath = 'frontmatter___backgroundImage___absolutePath',
  FrontmatterBackgroundImageAccessTime = 'frontmatter___backgroundImage___accessTime',
  FrontmatterBackgroundImageAtime = 'frontmatter___backgroundImage___atime',
  FrontmatterBackgroundImageAtimeMs = 'frontmatter___backgroundImage___atimeMs',
  FrontmatterBackgroundImageBase = 'frontmatter___backgroundImage___base',
  FrontmatterBackgroundImageBirthTime = 'frontmatter___backgroundImage___birthTime',
  FrontmatterBackgroundImageBirthtime = 'frontmatter___backgroundImage___birthtime',
  FrontmatterBackgroundImageBirthtimeMs = 'frontmatter___backgroundImage___birthtimeMs',
  FrontmatterBackgroundImageBlksize = 'frontmatter___backgroundImage___blksize',
  FrontmatterBackgroundImageBlocks = 'frontmatter___backgroundImage___blocks',
  FrontmatterBackgroundImageChangeTime = 'frontmatter___backgroundImage___changeTime',
  FrontmatterBackgroundImageChildAuthorJsonBio = 'frontmatter___backgroundImage___childAuthorJson___bio',
  FrontmatterBackgroundImageChildAuthorJsonChildren = 'frontmatter___backgroundImage___childAuthorJson___children',
  FrontmatterBackgroundImageChildAuthorJsonGithub = 'frontmatter___backgroundImage___childAuthorJson___github',
  FrontmatterBackgroundImageChildAuthorJsonId = 'frontmatter___backgroundImage___childAuthorJson___id',
  FrontmatterBackgroundImageChildAuthorJsonJsonId = 'frontmatter___backgroundImage___childAuthorJson___jsonId',
  FrontmatterBackgroundImageChildAuthorJsonName = 'frontmatter___backgroundImage___childAuthorJson___name',
  FrontmatterBackgroundImageChildAuthorJsonTwitter = 'frontmatter___backgroundImage___childAuthorJson___twitter',
  FrontmatterBackgroundImageChildMarkdownRemarkChildren = 'frontmatter___backgroundImage___childMarkdownRemark___children',
  FrontmatterBackgroundImageChildMarkdownRemarkExcerpt = 'frontmatter___backgroundImage___childMarkdownRemark___excerpt',
  FrontmatterBackgroundImageChildMarkdownRemarkExcerptAst = 'frontmatter___backgroundImage___childMarkdownRemark___excerptAst',
  FrontmatterBackgroundImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___backgroundImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterBackgroundImageChildMarkdownRemarkHeadings = 'frontmatter___backgroundImage___childMarkdownRemark___headings',
  FrontmatterBackgroundImageChildMarkdownRemarkHtml = 'frontmatter___backgroundImage___childMarkdownRemark___html',
  FrontmatterBackgroundImageChildMarkdownRemarkHtmlAst = 'frontmatter___backgroundImage___childMarkdownRemark___htmlAst',
  FrontmatterBackgroundImageChildMarkdownRemarkId = 'frontmatter___backgroundImage___childMarkdownRemark___id',
  FrontmatterBackgroundImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___backgroundImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterBackgroundImageChildMarkdownRemarkTableOfContents = 'frontmatter___backgroundImage___childMarkdownRemark___tableOfContents',
  FrontmatterBackgroundImageChildMarkdownRemarkTimeToRead = 'frontmatter___backgroundImage___childMarkdownRemark___timeToRead',
  FrontmatterBackgroundImageChildren = 'frontmatter___backgroundImage___children',
  FrontmatterBackgroundImageChildrenAuthorJson = 'frontmatter___backgroundImage___childrenAuthorJson',
  FrontmatterBackgroundImageChildrenAuthorJsonBio = 'frontmatter___backgroundImage___childrenAuthorJson___bio',
  FrontmatterBackgroundImageChildrenAuthorJsonChildren = 'frontmatter___backgroundImage___childrenAuthorJson___children',
  FrontmatterBackgroundImageChildrenAuthorJsonGithub = 'frontmatter___backgroundImage___childrenAuthorJson___github',
  FrontmatterBackgroundImageChildrenAuthorJsonId = 'frontmatter___backgroundImage___childrenAuthorJson___id',
  FrontmatterBackgroundImageChildrenAuthorJsonJsonId = 'frontmatter___backgroundImage___childrenAuthorJson___jsonId',
  FrontmatterBackgroundImageChildrenAuthorJsonName = 'frontmatter___backgroundImage___childrenAuthorJson___name',
  FrontmatterBackgroundImageChildrenAuthorJsonTwitter = 'frontmatter___backgroundImage___childrenAuthorJson___twitter',
  FrontmatterBackgroundImageChildrenMarkdownRemark = 'frontmatter___backgroundImage___childrenMarkdownRemark',
  FrontmatterBackgroundImageChildrenMarkdownRemarkChildren = 'frontmatter___backgroundImage___childrenMarkdownRemark___children',
  FrontmatterBackgroundImageChildrenMarkdownRemarkExcerpt = 'frontmatter___backgroundImage___childrenMarkdownRemark___excerpt',
  FrontmatterBackgroundImageChildrenMarkdownRemarkExcerptAst = 'frontmatter___backgroundImage___childrenMarkdownRemark___excerptAst',
  FrontmatterBackgroundImageChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___backgroundImage___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterBackgroundImageChildrenMarkdownRemarkHeadings = 'frontmatter___backgroundImage___childrenMarkdownRemark___headings',
  FrontmatterBackgroundImageChildrenMarkdownRemarkHtml = 'frontmatter___backgroundImage___childrenMarkdownRemark___html',
  FrontmatterBackgroundImageChildrenMarkdownRemarkHtmlAst = 'frontmatter___backgroundImage___childrenMarkdownRemark___htmlAst',
  FrontmatterBackgroundImageChildrenMarkdownRemarkId = 'frontmatter___backgroundImage___childrenMarkdownRemark___id',
  FrontmatterBackgroundImageChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___backgroundImage___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterBackgroundImageChildrenMarkdownRemarkTableOfContents = 'frontmatter___backgroundImage___childrenMarkdownRemark___tableOfContents',
  FrontmatterBackgroundImageChildrenMarkdownRemarkTimeToRead = 'frontmatter___backgroundImage___childrenMarkdownRemark___timeToRead',
  FrontmatterBackgroundImageChildrenChildren = 'frontmatter___backgroundImage___children___children',
  FrontmatterBackgroundImageChildrenId = 'frontmatter___backgroundImage___children___id',
  FrontmatterBackgroundImageCtime = 'frontmatter___backgroundImage___ctime',
  FrontmatterBackgroundImageCtimeMs = 'frontmatter___backgroundImage___ctimeMs',
  FrontmatterBackgroundImageDev = 'frontmatter___backgroundImage___dev',
  FrontmatterBackgroundImageDir = 'frontmatter___backgroundImage___dir',
  FrontmatterBackgroundImageExt = 'frontmatter___backgroundImage___ext',
  FrontmatterBackgroundImageExtension = 'frontmatter___backgroundImage___extension',
  FrontmatterBackgroundImageGid = 'frontmatter___backgroundImage___gid',
  FrontmatterBackgroundImageId = 'frontmatter___backgroundImage___id',
  FrontmatterBackgroundImageIno = 'frontmatter___backgroundImage___ino',
  FrontmatterBackgroundImageInternalContent = 'frontmatter___backgroundImage___internal___content',
  FrontmatterBackgroundImageInternalContentDigest = 'frontmatter___backgroundImage___internal___contentDigest',
  FrontmatterBackgroundImageInternalDescription = 'frontmatter___backgroundImage___internal___description',
  FrontmatterBackgroundImageInternalFieldOwners = 'frontmatter___backgroundImage___internal___fieldOwners',
  FrontmatterBackgroundImageInternalIgnoreType = 'frontmatter___backgroundImage___internal___ignoreType',
  FrontmatterBackgroundImageInternalMediaType = 'frontmatter___backgroundImage___internal___mediaType',
  FrontmatterBackgroundImageInternalOwner = 'frontmatter___backgroundImage___internal___owner',
  FrontmatterBackgroundImageInternalType = 'frontmatter___backgroundImage___internal___type',
  FrontmatterBackgroundImageMode = 'frontmatter___backgroundImage___mode',
  FrontmatterBackgroundImageModifiedTime = 'frontmatter___backgroundImage___modifiedTime',
  FrontmatterBackgroundImageMtime = 'frontmatter___backgroundImage___mtime',
  FrontmatterBackgroundImageMtimeMs = 'frontmatter___backgroundImage___mtimeMs',
  FrontmatterBackgroundImageName = 'frontmatter___backgroundImage___name',
  FrontmatterBackgroundImageNlink = 'frontmatter___backgroundImage___nlink',
  FrontmatterBackgroundImageParentChildren = 'frontmatter___backgroundImage___parent___children',
  FrontmatterBackgroundImageParentId = 'frontmatter___backgroundImage___parent___id',
  FrontmatterBackgroundImagePrettySize = 'frontmatter___backgroundImage___prettySize',
  FrontmatterBackgroundImagePublicUrl = 'frontmatter___backgroundImage___publicURL',
  FrontmatterBackgroundImageRdev = 'frontmatter___backgroundImage___rdev',
  FrontmatterBackgroundImageRelativeDirectory = 'frontmatter___backgroundImage___relativeDirectory',
  FrontmatterBackgroundImageRelativePath = 'frontmatter___backgroundImage___relativePath',
  FrontmatterBackgroundImageRoot = 'frontmatter___backgroundImage___root',
  FrontmatterBackgroundImageSize = 'frontmatter___backgroundImage___size',
  FrontmatterBackgroundImageSourceInstanceName = 'frontmatter___backgroundImage___sourceInstanceName',
  FrontmatterBackgroundImageUid = 'frontmatter___backgroundImage___uid',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export type MarkdownRemarkFieldsFilterInput = {
  pageType?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFilterInput = {
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter'
  authors?: Maybe<Array<Maybe<AuthorJson>>>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<File>
  date?: Maybe<Scalars['Date']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterDateArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  authors?: Maybe<AuthorJsonFilterListInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  backgroundImage?: Maybe<FileFilterInput>
  date?: Maybe<DateQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<MarkdownRemarkEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type NodeFilterInput = {
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  allAuthorJson: AuthorJsonConnection
  allDirectory: DirectoryConnection
  allFile: FileConnection
  allMarkdownRemark: MarkdownRemarkConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  authorJson?: Maybe<AuthorJson>
  directory?: Maybe<Directory>
  file?: Maybe<File>
  markdownRemark?: Maybe<MarkdownRemark>
  site?: Maybe<Site>
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  siteFunction?: Maybe<SiteFunction>
  sitePage?: Maybe<SitePage>
  sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllAuthorJsonArgs = {
  filter?: Maybe<AuthorJsonFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<AuthorJsonSortInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<FileSortInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<MarkdownRemarkSortInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  sort?: Maybe<SitePluginSortInput>
}

export type QueryAuthorJsonArgs = {
  avatar?: Maybe<FileFilterInput>
  bio?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  github?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  jsonId?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  twitter?: Maybe<StringQueryOperatorInput>
}

export type QueryDirectoryArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath?: Maybe<StringQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  childAuthorJson?: Maybe<AuthorJsonFilterInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  children?: Maybe<NodeFilterListInput>
  childrenAuthorJson?: Maybe<AuthorJsonFilterListInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  ctime?: Maybe<DateQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mode?: Maybe<IntQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
}

export type QueryMarkdownRemarkArgs = {
  children?: Maybe<NodeFilterListInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mapping?: Maybe<SiteMappingFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  functionRoute?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  pageContext?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<JsonQueryOperatorInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  host?: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  mapping?: Maybe<SiteMapping>
  parent?: Maybe<Node>
  pathPrefix?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  port?: Maybe<Scalars['Int']>
  siteMetadata?: Maybe<SiteSiteMetadata>
}

export type SiteBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  buildTime?: Maybe<Scalars['Date']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: Maybe<Scalars['String']>
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  parent?: Maybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MappingMarkdownRemarkFrontmatterAuthors = 'mapping___MarkdownRemark_frontmatter_authors',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  host?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  mapping?: Maybe<SiteMappingFilterInput>
  parent?: Maybe<NodeFilterInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  port?: Maybe<IntQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type SiteFunction = Node & {
  __typename?: 'SiteFunction'
  absoluteCompiledFilePath: Scalars['String']
  children: Array<Node>
  functionRoute: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  matchPath?: Maybe<Scalars['String']>
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  parent?: Maybe<Node>
  pluginName: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge'
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  functionRoute?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteFunctionGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SiteGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteMapping = {
  __typename?: 'SiteMapping'
  MarkdownRemark_frontmatter_authors?: Maybe<Scalars['String']>
}

export type SiteMappingFilterInput = {
  MarkdownRemark_frontmatter_authors?: Maybe<StringQueryOperatorInput>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  pageContext?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  path: Scalars['String']
  pluginCreator?: Maybe<SitePlugin>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: Maybe<NodeFilterListInput>
  component?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  pageContext?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  path?: Maybe<StringQueryOperatorInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePageGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson?: Maybe<Scalars['JSON']>
  parent?: Maybe<Node>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<Scalars['JSON']>
  resolve?: Maybe<Scalars['String']>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  version?: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: Maybe<StringQueryOperatorInput>
  children?: Maybe<NodeFilterListInput>
  id?: Maybe<StringQueryOperatorInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<JsonQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<JsonQueryOperatorInput>
  resolve?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
  group: Array<SitePluginGroupConnection>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum?: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  ne?: Maybe<Scalars['String']>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
}

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>

export type PagesQueryQuery = {
  __typename?: 'Query'
  allSiteFunction: {
    __typename?: 'SiteFunctionConnection'
    nodes: Array<{ __typename?: 'SiteFunction'; functionRoute: string }>
  }
  allSitePage: {
    __typename?: 'SitePageConnection'
    nodes: Array<{ __typename?: 'SitePage'; path: string }>
  }
}

export type SiteMetadataFragment = {
  __typename?: 'Query'
  site?:
    | {
        __typename?: 'Site'
        siteMetadata?:
          | {
              __typename?: 'SiteSiteMetadata'
              description?: string | null | undefined
              keywords?: string | null | undefined
              title?: string | null | undefined
              siteUrl?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = {
  __typename?: 'Query'
  site?:
    | {
        __typename?: 'Site'
        siteMetadata?:
          | {
              __typename?: 'SiteSiteMetadata'
              description?: string | null | undefined
              keywords?: string | null | undefined
              title?: string | null | undefined
              siteUrl?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_2_Query = {
  __typename?: 'Query'
  allMarkdownRemark: {
    __typename?: 'MarkdownRemarkConnection'
    edges: Array<{
      __typename?: 'MarkdownRemarkEdge'
      node: {
        __typename?: 'MarkdownRemark'
        id: string
        fields?:
          | {
              __typename?: 'MarkdownRemarkFields'
              slug?: string | null | undefined
            }
          | null
          | undefined
        frontmatter?:
          | {
              __typename?: 'MarkdownRemarkFrontmatter'
              title?: string | null | undefined
              date?: any | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              backgroundImage?:
                | { __typename?: 'File'; publicURL?: string | null | undefined }
                | null
                | undefined
            }
          | null
          | undefined
      }
    }>
  }
}

export type Unnamed_3_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_3_Query = {
  __typename?: 'Query'
  markdownRemark?:
    | {
        __typename?: 'MarkdownRemark'
        html?: string | null | undefined
        frontmatter?:
          | {
              __typename?: 'MarkdownRemarkFrontmatter'
              title?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type Unnamed_4_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_4_Query = {
  __typename?: 'Query'
  markdownRemark?:
    | {
        __typename?: 'MarkdownRemark'
        html?: string | null | undefined
        excerpt?: string | null | undefined
        frontmatter?:
          | {
              __typename?: 'MarkdownRemarkFrontmatter'
              backgroundColor?: string | null | undefined
              title?: string | null | undefined
              date?: any | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              backgroundImage?:
                | { __typename?: 'File'; publicURL?: string | null | undefined }
                | null
                | undefined
              authors?:
                | Array<
                    | {
                        __typename?: 'AuthorJson'
                        id: string
                        name?: string | null | undefined
                        bio?: string | null | undefined
                        twitter?: string | null | undefined
                        github?: string | null | undefined
                        avatar?:
                          | {
                              __typename?: 'File'
                              id: string
                              publicURL?: string | null | undefined
                            }
                          | null
                          | undefined
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}
