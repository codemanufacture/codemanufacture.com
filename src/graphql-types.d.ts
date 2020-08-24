/* tslint:disable */
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
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
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  github?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  avatar?: Maybe<File>
}

export type AuthorJsonConnection = {
  __typename?: 'AuthorJsonConnection'
  totalCount: Scalars['Int']
  edges: Array<AuthorJsonEdge>
  nodes: Array<AuthorJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<AuthorJsonGroupConnection>
}

export type AuthorJsonConnectionDistinctArgs = {
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: AuthorJsonFieldsEnum
}

export type AuthorJsonEdge = {
  __typename?: 'AuthorJsonEdge'
  next?: Maybe<AuthorJson>
  node: AuthorJson
  previous?: Maybe<AuthorJson>
}

export enum AuthorJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Bio = 'bio',
  Github = 'github',
  Twitter = 'twitter',
  AvatarSourceInstanceName = 'avatar___sourceInstanceName',
  AvatarAbsolutePath = 'avatar___absolutePath',
  AvatarRelativePath = 'avatar___relativePath',
  AvatarExtension = 'avatar___extension',
  AvatarSize = 'avatar___size',
  AvatarPrettySize = 'avatar___prettySize',
  AvatarModifiedTime = 'avatar___modifiedTime',
  AvatarAccessTime = 'avatar___accessTime',
  AvatarChangeTime = 'avatar___changeTime',
  AvatarBirthTime = 'avatar___birthTime',
  AvatarRoot = 'avatar___root',
  AvatarDir = 'avatar___dir',
  AvatarBase = 'avatar___base',
  AvatarExt = 'avatar___ext',
  AvatarName = 'avatar___name',
  AvatarRelativeDirectory = 'avatar___relativeDirectory',
  AvatarDev = 'avatar___dev',
  AvatarMode = 'avatar___mode',
  AvatarNlink = 'avatar___nlink',
  AvatarUid = 'avatar___uid',
  AvatarGid = 'avatar___gid',
  AvatarRdev = 'avatar___rdev',
  AvatarIno = 'avatar___ino',
  AvatarAtimeMs = 'avatar___atimeMs',
  AvatarMtimeMs = 'avatar___mtimeMs',
  AvatarCtimeMs = 'avatar___ctimeMs',
  AvatarAtime = 'avatar___atime',
  AvatarMtime = 'avatar___mtime',
  AvatarCtime = 'avatar___ctime',
  AvatarBirthtime = 'avatar___birthtime',
  AvatarBirthtimeMs = 'avatar___birthtimeMs',
  AvatarBlksize = 'avatar___blksize',
  AvatarBlocks = 'avatar___blocks',
  AvatarPublicUrl = 'avatar___publicURL',
  AvatarId = 'avatar___id',
  AvatarParentId = 'avatar___parent___id',
  AvatarParentParentId = 'avatar___parent___parent___id',
  AvatarParentParentChildren = 'avatar___parent___parent___children',
  AvatarParentChildren = 'avatar___parent___children',
  AvatarParentChildrenId = 'avatar___parent___children___id',
  AvatarParentChildrenChildren = 'avatar___parent___children___children',
  AvatarParentInternalContent = 'avatar___parent___internal___content',
  AvatarParentInternalContentDigest = 'avatar___parent___internal___contentDigest',
  AvatarParentInternalDescription = 'avatar___parent___internal___description',
  AvatarParentInternalFieldOwners = 'avatar___parent___internal___fieldOwners',
  AvatarParentInternalIgnoreType = 'avatar___parent___internal___ignoreType',
  AvatarParentInternalMediaType = 'avatar___parent___internal___mediaType',
  AvatarParentInternalOwner = 'avatar___parent___internal___owner',
  AvatarParentInternalType = 'avatar___parent___internal___type',
  AvatarChildren = 'avatar___children',
  AvatarChildrenId = 'avatar___children___id',
  AvatarChildrenParentId = 'avatar___children___parent___id',
  AvatarChildrenParentChildren = 'avatar___children___parent___children',
  AvatarChildrenChildren = 'avatar___children___children',
  AvatarChildrenChildrenId = 'avatar___children___children___id',
  AvatarChildrenChildrenChildren = 'avatar___children___children___children',
  AvatarChildrenInternalContent = 'avatar___children___internal___content',
  AvatarChildrenInternalContentDigest = 'avatar___children___internal___contentDigest',
  AvatarChildrenInternalDescription = 'avatar___children___internal___description',
  AvatarChildrenInternalFieldOwners = 'avatar___children___internal___fieldOwners',
  AvatarChildrenInternalIgnoreType = 'avatar___children___internal___ignoreType',
  AvatarChildrenInternalMediaType = 'avatar___children___internal___mediaType',
  AvatarChildrenInternalOwner = 'avatar___children___internal___owner',
  AvatarChildrenInternalType = 'avatar___children___internal___type',
  AvatarInternalContent = 'avatar___internal___content',
  AvatarInternalContentDigest = 'avatar___internal___contentDigest',
  AvatarInternalDescription = 'avatar___internal___description',
  AvatarInternalFieldOwners = 'avatar___internal___fieldOwners',
  AvatarInternalIgnoreType = 'avatar___internal___ignoreType',
  AvatarInternalMediaType = 'avatar___internal___mediaType',
  AvatarInternalOwner = 'avatar___internal___owner',
  AvatarInternalType = 'avatar___internal___type',
  AvatarChildMarkdownRemarkId = 'avatar___childMarkdownRemark___id',
  AvatarChildMarkdownRemarkFrontmatterTitle = 'avatar___childMarkdownRemark___frontmatter___title',
  AvatarChildMarkdownRemarkFrontmatterDate = 'avatar___childMarkdownRemark___frontmatter___date',
  AvatarChildMarkdownRemarkFrontmatterAuthors = 'avatar___childMarkdownRemark___frontmatter___authors',
  AvatarChildMarkdownRemarkFrontmatterTags = 'avatar___childMarkdownRemark___frontmatter___tags',
  AvatarChildMarkdownRemarkFrontmatterBackgroundColor = 'avatar___childMarkdownRemark___frontmatter___backgroundColor',
  AvatarChildMarkdownRemarkExcerpt = 'avatar___childMarkdownRemark___excerpt',
  AvatarChildMarkdownRemarkRawMarkdownBody = 'avatar___childMarkdownRemark___rawMarkdownBody',
  AvatarChildMarkdownRemarkFileAbsolutePath = 'avatar___childMarkdownRemark___fileAbsolutePath',
  AvatarChildMarkdownRemarkFieldsSlug = 'avatar___childMarkdownRemark___fields___slug',
  AvatarChildMarkdownRemarkFieldsPageType = 'avatar___childMarkdownRemark___fields___pageType',
  AvatarChildMarkdownRemarkHtml = 'avatar___childMarkdownRemark___html',
  AvatarChildMarkdownRemarkHtmlAst = 'avatar___childMarkdownRemark___htmlAst',
  AvatarChildMarkdownRemarkExcerptAst = 'avatar___childMarkdownRemark___excerptAst',
  AvatarChildMarkdownRemarkHeadings = 'avatar___childMarkdownRemark___headings',
  AvatarChildMarkdownRemarkHeadingsId = 'avatar___childMarkdownRemark___headings___id',
  AvatarChildMarkdownRemarkHeadingsValue = 'avatar___childMarkdownRemark___headings___value',
  AvatarChildMarkdownRemarkHeadingsDepth = 'avatar___childMarkdownRemark___headings___depth',
  AvatarChildMarkdownRemarkTimeToRead = 'avatar___childMarkdownRemark___timeToRead',
  AvatarChildMarkdownRemarkTableOfContents = 'avatar___childMarkdownRemark___tableOfContents',
  AvatarChildMarkdownRemarkWordCountParagraphs = 'avatar___childMarkdownRemark___wordCount___paragraphs',
  AvatarChildMarkdownRemarkWordCountSentences = 'avatar___childMarkdownRemark___wordCount___sentences',
  AvatarChildMarkdownRemarkWordCountWords = 'avatar___childMarkdownRemark___wordCount___words',
  AvatarChildMarkdownRemarkParentId = 'avatar___childMarkdownRemark___parent___id',
  AvatarChildMarkdownRemarkParentChildren = 'avatar___childMarkdownRemark___parent___children',
  AvatarChildMarkdownRemarkChildren = 'avatar___childMarkdownRemark___children',
  AvatarChildMarkdownRemarkChildrenId = 'avatar___childMarkdownRemark___children___id',
  AvatarChildMarkdownRemarkChildrenChildren = 'avatar___childMarkdownRemark___children___children',
  AvatarChildMarkdownRemarkInternalContent = 'avatar___childMarkdownRemark___internal___content',
  AvatarChildMarkdownRemarkInternalContentDigest = 'avatar___childMarkdownRemark___internal___contentDigest',
  AvatarChildMarkdownRemarkInternalDescription = 'avatar___childMarkdownRemark___internal___description',
  AvatarChildMarkdownRemarkInternalFieldOwners = 'avatar___childMarkdownRemark___internal___fieldOwners',
  AvatarChildMarkdownRemarkInternalIgnoreType = 'avatar___childMarkdownRemark___internal___ignoreType',
  AvatarChildMarkdownRemarkInternalMediaType = 'avatar___childMarkdownRemark___internal___mediaType',
  AvatarChildMarkdownRemarkInternalOwner = 'avatar___childMarkdownRemark___internal___owner',
  AvatarChildMarkdownRemarkInternalType = 'avatar___childMarkdownRemark___internal___type',
  AvatarChildAuthorJsonId = 'avatar___childAuthorJson___id',
  AvatarChildAuthorJsonParentId = 'avatar___childAuthorJson___parent___id',
  AvatarChildAuthorJsonParentChildren = 'avatar___childAuthorJson___parent___children',
  AvatarChildAuthorJsonChildren = 'avatar___childAuthorJson___children',
  AvatarChildAuthorJsonChildrenId = 'avatar___childAuthorJson___children___id',
  AvatarChildAuthorJsonChildrenChildren = 'avatar___childAuthorJson___children___children',
  AvatarChildAuthorJsonInternalContent = 'avatar___childAuthorJson___internal___content',
  AvatarChildAuthorJsonInternalContentDigest = 'avatar___childAuthorJson___internal___contentDigest',
  AvatarChildAuthorJsonInternalDescription = 'avatar___childAuthorJson___internal___description',
  AvatarChildAuthorJsonInternalFieldOwners = 'avatar___childAuthorJson___internal___fieldOwners',
  AvatarChildAuthorJsonInternalIgnoreType = 'avatar___childAuthorJson___internal___ignoreType',
  AvatarChildAuthorJsonInternalMediaType = 'avatar___childAuthorJson___internal___mediaType',
  AvatarChildAuthorJsonInternalOwner = 'avatar___childAuthorJson___internal___owner',
  AvatarChildAuthorJsonInternalType = 'avatar___childAuthorJson___internal___type',
  AvatarChildAuthorJsonName = 'avatar___childAuthorJson___name',
  AvatarChildAuthorJsonBio = 'avatar___childAuthorJson___bio',
  AvatarChildAuthorJsonGithub = 'avatar___childAuthorJson___github',
  AvatarChildAuthorJsonTwitter = 'avatar___childAuthorJson___twitter',
  AvatarChildAuthorJsonAvatarSourceInstanceName = 'avatar___childAuthorJson___avatar___sourceInstanceName',
  AvatarChildAuthorJsonAvatarAbsolutePath = 'avatar___childAuthorJson___avatar___absolutePath',
  AvatarChildAuthorJsonAvatarRelativePath = 'avatar___childAuthorJson___avatar___relativePath',
  AvatarChildAuthorJsonAvatarExtension = 'avatar___childAuthorJson___avatar___extension',
  AvatarChildAuthorJsonAvatarSize = 'avatar___childAuthorJson___avatar___size',
  AvatarChildAuthorJsonAvatarPrettySize = 'avatar___childAuthorJson___avatar___prettySize',
  AvatarChildAuthorJsonAvatarModifiedTime = 'avatar___childAuthorJson___avatar___modifiedTime',
  AvatarChildAuthorJsonAvatarAccessTime = 'avatar___childAuthorJson___avatar___accessTime',
  AvatarChildAuthorJsonAvatarChangeTime = 'avatar___childAuthorJson___avatar___changeTime',
  AvatarChildAuthorJsonAvatarBirthTime = 'avatar___childAuthorJson___avatar___birthTime',
  AvatarChildAuthorJsonAvatarRoot = 'avatar___childAuthorJson___avatar___root',
  AvatarChildAuthorJsonAvatarDir = 'avatar___childAuthorJson___avatar___dir',
  AvatarChildAuthorJsonAvatarBase = 'avatar___childAuthorJson___avatar___base',
  AvatarChildAuthorJsonAvatarExt = 'avatar___childAuthorJson___avatar___ext',
  AvatarChildAuthorJsonAvatarName = 'avatar___childAuthorJson___avatar___name',
  AvatarChildAuthorJsonAvatarRelativeDirectory = 'avatar___childAuthorJson___avatar___relativeDirectory',
  AvatarChildAuthorJsonAvatarDev = 'avatar___childAuthorJson___avatar___dev',
  AvatarChildAuthorJsonAvatarMode = 'avatar___childAuthorJson___avatar___mode',
  AvatarChildAuthorJsonAvatarNlink = 'avatar___childAuthorJson___avatar___nlink',
  AvatarChildAuthorJsonAvatarUid = 'avatar___childAuthorJson___avatar___uid',
  AvatarChildAuthorJsonAvatarGid = 'avatar___childAuthorJson___avatar___gid',
  AvatarChildAuthorJsonAvatarRdev = 'avatar___childAuthorJson___avatar___rdev',
  AvatarChildAuthorJsonAvatarIno = 'avatar___childAuthorJson___avatar___ino',
  AvatarChildAuthorJsonAvatarAtimeMs = 'avatar___childAuthorJson___avatar___atimeMs',
  AvatarChildAuthorJsonAvatarMtimeMs = 'avatar___childAuthorJson___avatar___mtimeMs',
  AvatarChildAuthorJsonAvatarCtimeMs = 'avatar___childAuthorJson___avatar___ctimeMs',
  AvatarChildAuthorJsonAvatarAtime = 'avatar___childAuthorJson___avatar___atime',
  AvatarChildAuthorJsonAvatarMtime = 'avatar___childAuthorJson___avatar___mtime',
  AvatarChildAuthorJsonAvatarCtime = 'avatar___childAuthorJson___avatar___ctime',
  AvatarChildAuthorJsonAvatarBirthtime = 'avatar___childAuthorJson___avatar___birthtime',
  AvatarChildAuthorJsonAvatarBirthtimeMs = 'avatar___childAuthorJson___avatar___birthtimeMs',
  AvatarChildAuthorJsonAvatarBlksize = 'avatar___childAuthorJson___avatar___blksize',
  AvatarChildAuthorJsonAvatarBlocks = 'avatar___childAuthorJson___avatar___blocks',
  AvatarChildAuthorJsonAvatarPublicUrl = 'avatar___childAuthorJson___avatar___publicURL',
  AvatarChildAuthorJsonAvatarId = 'avatar___childAuthorJson___avatar___id',
  AvatarChildAuthorJsonAvatarChildren = 'avatar___childAuthorJson___avatar___children',
}

export type AuthorJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  bio?: Maybe<StringQueryOperatorInput>
  github?: Maybe<StringQueryOperatorInput>
  twitter?: Maybe<StringQueryOperatorInput>
  avatar?: Maybe<FileFilterInput>
}

export type AuthorJsonFilterListInput = {
  elemMatch?: Maybe<AuthorJsonFilterInput>
}

export type AuthorJsonGroupConnection = {
  __typename?: 'AuthorJsonGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<AuthorJsonEdge>
  nodes: Array<AuthorJson>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type AuthorJsonSortInput = {
  fields?: Maybe<Array<Maybe<AuthorJsonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
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
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  childMarkdownRemark?: Maybe<MarkdownRemark>
  childAuthorJson?: Maybe<AuthorJson>
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
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
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterAuthors = 'childMarkdownRemark___frontmatter___authors',
  ChildMarkdownRemarkFrontmatterAuthorsId = 'childMarkdownRemark___frontmatter___authors___id',
  ChildMarkdownRemarkFrontmatterAuthorsChildren = 'childMarkdownRemark___frontmatter___authors___children',
  ChildMarkdownRemarkFrontmatterAuthorsName = 'childMarkdownRemark___frontmatter___authors___name',
  ChildMarkdownRemarkFrontmatterAuthorsBio = 'childMarkdownRemark___frontmatter___authors___bio',
  ChildMarkdownRemarkFrontmatterAuthorsGithub = 'childMarkdownRemark___frontmatter___authors___github',
  ChildMarkdownRemarkFrontmatterAuthorsTwitter = 'childMarkdownRemark___frontmatter___authors___twitter',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterBackgroundImageSourceInstanceName = 'childMarkdownRemark___frontmatter___backgroundImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterBackgroundImageAbsolutePath = 'childMarkdownRemark___frontmatter___backgroundImage___absolutePath',
  ChildMarkdownRemarkFrontmatterBackgroundImageRelativePath = 'childMarkdownRemark___frontmatter___backgroundImage___relativePath',
  ChildMarkdownRemarkFrontmatterBackgroundImageExtension = 'childMarkdownRemark___frontmatter___backgroundImage___extension',
  ChildMarkdownRemarkFrontmatterBackgroundImageSize = 'childMarkdownRemark___frontmatter___backgroundImage___size',
  ChildMarkdownRemarkFrontmatterBackgroundImagePrettySize = 'childMarkdownRemark___frontmatter___backgroundImage___prettySize',
  ChildMarkdownRemarkFrontmatterBackgroundImageModifiedTime = 'childMarkdownRemark___frontmatter___backgroundImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageAccessTime = 'childMarkdownRemark___frontmatter___backgroundImage___accessTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageChangeTime = 'childMarkdownRemark___frontmatter___backgroundImage___changeTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthTime = 'childMarkdownRemark___frontmatter___backgroundImage___birthTime',
  ChildMarkdownRemarkFrontmatterBackgroundImageRoot = 'childMarkdownRemark___frontmatter___backgroundImage___root',
  ChildMarkdownRemarkFrontmatterBackgroundImageDir = 'childMarkdownRemark___frontmatter___backgroundImage___dir',
  ChildMarkdownRemarkFrontmatterBackgroundImageBase = 'childMarkdownRemark___frontmatter___backgroundImage___base',
  ChildMarkdownRemarkFrontmatterBackgroundImageExt = 'childMarkdownRemark___frontmatter___backgroundImage___ext',
  ChildMarkdownRemarkFrontmatterBackgroundImageName = 'childMarkdownRemark___frontmatter___backgroundImage___name',
  ChildMarkdownRemarkFrontmatterBackgroundImageRelativeDirectory = 'childMarkdownRemark___frontmatter___backgroundImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterBackgroundImageDev = 'childMarkdownRemark___frontmatter___backgroundImage___dev',
  ChildMarkdownRemarkFrontmatterBackgroundImageMode = 'childMarkdownRemark___frontmatter___backgroundImage___mode',
  ChildMarkdownRemarkFrontmatterBackgroundImageNlink = 'childMarkdownRemark___frontmatter___backgroundImage___nlink',
  ChildMarkdownRemarkFrontmatterBackgroundImageUid = 'childMarkdownRemark___frontmatter___backgroundImage___uid',
  ChildMarkdownRemarkFrontmatterBackgroundImageGid = 'childMarkdownRemark___frontmatter___backgroundImage___gid',
  ChildMarkdownRemarkFrontmatterBackgroundImageRdev = 'childMarkdownRemark___frontmatter___backgroundImage___rdev',
  ChildMarkdownRemarkFrontmatterBackgroundImageIno = 'childMarkdownRemark___frontmatter___backgroundImage___ino',
  ChildMarkdownRemarkFrontmatterBackgroundImageAtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___atimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageMtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageCtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageAtime = 'childMarkdownRemark___frontmatter___backgroundImage___atime',
  ChildMarkdownRemarkFrontmatterBackgroundImageMtime = 'childMarkdownRemark___frontmatter___backgroundImage___mtime',
  ChildMarkdownRemarkFrontmatterBackgroundImageCtime = 'childMarkdownRemark___frontmatter___backgroundImage___ctime',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthtime = 'childMarkdownRemark___frontmatter___backgroundImage___birthtime',
  ChildMarkdownRemarkFrontmatterBackgroundImageBirthtimeMs = 'childMarkdownRemark___frontmatter___backgroundImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterBackgroundImageBlksize = 'childMarkdownRemark___frontmatter___backgroundImage___blksize',
  ChildMarkdownRemarkFrontmatterBackgroundImageBlocks = 'childMarkdownRemark___frontmatter___backgroundImage___blocks',
  ChildMarkdownRemarkFrontmatterBackgroundImagePublicUrl = 'childMarkdownRemark___frontmatter___backgroundImage___publicURL',
  ChildMarkdownRemarkFrontmatterBackgroundImageId = 'childMarkdownRemark___frontmatter___backgroundImage___id',
  ChildMarkdownRemarkFrontmatterBackgroundImageChildren = 'childMarkdownRemark___frontmatter___backgroundImage___children',
  ChildMarkdownRemarkFrontmatterBackgroundColor = 'childMarkdownRemark___frontmatter___backgroundColor',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFieldsPageType = 'childMarkdownRemark___fields___pageType',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildAuthorJsonId = 'childAuthorJson___id',
  ChildAuthorJsonParentId = 'childAuthorJson___parent___id',
  ChildAuthorJsonParentParentId = 'childAuthorJson___parent___parent___id',
  ChildAuthorJsonParentParentChildren = 'childAuthorJson___parent___parent___children',
  ChildAuthorJsonParentChildren = 'childAuthorJson___parent___children',
  ChildAuthorJsonParentChildrenId = 'childAuthorJson___parent___children___id',
  ChildAuthorJsonParentChildrenChildren = 'childAuthorJson___parent___children___children',
  ChildAuthorJsonParentInternalContent = 'childAuthorJson___parent___internal___content',
  ChildAuthorJsonParentInternalContentDigest = 'childAuthorJson___parent___internal___contentDigest',
  ChildAuthorJsonParentInternalDescription = 'childAuthorJson___parent___internal___description',
  ChildAuthorJsonParentInternalFieldOwners = 'childAuthorJson___parent___internal___fieldOwners',
  ChildAuthorJsonParentInternalIgnoreType = 'childAuthorJson___parent___internal___ignoreType',
  ChildAuthorJsonParentInternalMediaType = 'childAuthorJson___parent___internal___mediaType',
  ChildAuthorJsonParentInternalOwner = 'childAuthorJson___parent___internal___owner',
  ChildAuthorJsonParentInternalType = 'childAuthorJson___parent___internal___type',
  ChildAuthorJsonChildren = 'childAuthorJson___children',
  ChildAuthorJsonChildrenId = 'childAuthorJson___children___id',
  ChildAuthorJsonChildrenParentId = 'childAuthorJson___children___parent___id',
  ChildAuthorJsonChildrenParentChildren = 'childAuthorJson___children___parent___children',
  ChildAuthorJsonChildrenChildren = 'childAuthorJson___children___children',
  ChildAuthorJsonChildrenChildrenId = 'childAuthorJson___children___children___id',
  ChildAuthorJsonChildrenChildrenChildren = 'childAuthorJson___children___children___children',
  ChildAuthorJsonChildrenInternalContent = 'childAuthorJson___children___internal___content',
  ChildAuthorJsonChildrenInternalContentDigest = 'childAuthorJson___children___internal___contentDigest',
  ChildAuthorJsonChildrenInternalDescription = 'childAuthorJson___children___internal___description',
  ChildAuthorJsonChildrenInternalFieldOwners = 'childAuthorJson___children___internal___fieldOwners',
  ChildAuthorJsonChildrenInternalIgnoreType = 'childAuthorJson___children___internal___ignoreType',
  ChildAuthorJsonChildrenInternalMediaType = 'childAuthorJson___children___internal___mediaType',
  ChildAuthorJsonChildrenInternalOwner = 'childAuthorJson___children___internal___owner',
  ChildAuthorJsonChildrenInternalType = 'childAuthorJson___children___internal___type',
  ChildAuthorJsonInternalContent = 'childAuthorJson___internal___content',
  ChildAuthorJsonInternalContentDigest = 'childAuthorJson___internal___contentDigest',
  ChildAuthorJsonInternalDescription = 'childAuthorJson___internal___description',
  ChildAuthorJsonInternalFieldOwners = 'childAuthorJson___internal___fieldOwners',
  ChildAuthorJsonInternalIgnoreType = 'childAuthorJson___internal___ignoreType',
  ChildAuthorJsonInternalMediaType = 'childAuthorJson___internal___mediaType',
  ChildAuthorJsonInternalOwner = 'childAuthorJson___internal___owner',
  ChildAuthorJsonInternalType = 'childAuthorJson___internal___type',
  ChildAuthorJsonName = 'childAuthorJson___name',
  ChildAuthorJsonBio = 'childAuthorJson___bio',
  ChildAuthorJsonGithub = 'childAuthorJson___github',
  ChildAuthorJsonTwitter = 'childAuthorJson___twitter',
  ChildAuthorJsonAvatarSourceInstanceName = 'childAuthorJson___avatar___sourceInstanceName',
  ChildAuthorJsonAvatarAbsolutePath = 'childAuthorJson___avatar___absolutePath',
  ChildAuthorJsonAvatarRelativePath = 'childAuthorJson___avatar___relativePath',
  ChildAuthorJsonAvatarExtension = 'childAuthorJson___avatar___extension',
  ChildAuthorJsonAvatarSize = 'childAuthorJson___avatar___size',
  ChildAuthorJsonAvatarPrettySize = 'childAuthorJson___avatar___prettySize',
  ChildAuthorJsonAvatarModifiedTime = 'childAuthorJson___avatar___modifiedTime',
  ChildAuthorJsonAvatarAccessTime = 'childAuthorJson___avatar___accessTime',
  ChildAuthorJsonAvatarChangeTime = 'childAuthorJson___avatar___changeTime',
  ChildAuthorJsonAvatarBirthTime = 'childAuthorJson___avatar___birthTime',
  ChildAuthorJsonAvatarRoot = 'childAuthorJson___avatar___root',
  ChildAuthorJsonAvatarDir = 'childAuthorJson___avatar___dir',
  ChildAuthorJsonAvatarBase = 'childAuthorJson___avatar___base',
  ChildAuthorJsonAvatarExt = 'childAuthorJson___avatar___ext',
  ChildAuthorJsonAvatarName = 'childAuthorJson___avatar___name',
  ChildAuthorJsonAvatarRelativeDirectory = 'childAuthorJson___avatar___relativeDirectory',
  ChildAuthorJsonAvatarDev = 'childAuthorJson___avatar___dev',
  ChildAuthorJsonAvatarMode = 'childAuthorJson___avatar___mode',
  ChildAuthorJsonAvatarNlink = 'childAuthorJson___avatar___nlink',
  ChildAuthorJsonAvatarUid = 'childAuthorJson___avatar___uid',
  ChildAuthorJsonAvatarGid = 'childAuthorJson___avatar___gid',
  ChildAuthorJsonAvatarRdev = 'childAuthorJson___avatar___rdev',
  ChildAuthorJsonAvatarIno = 'childAuthorJson___avatar___ino',
  ChildAuthorJsonAvatarAtimeMs = 'childAuthorJson___avatar___atimeMs',
  ChildAuthorJsonAvatarMtimeMs = 'childAuthorJson___avatar___mtimeMs',
  ChildAuthorJsonAvatarCtimeMs = 'childAuthorJson___avatar___ctimeMs',
  ChildAuthorJsonAvatarAtime = 'childAuthorJson___avatar___atime',
  ChildAuthorJsonAvatarMtime = 'childAuthorJson___avatar___mtime',
  ChildAuthorJsonAvatarCtime = 'childAuthorJson___avatar___ctime',
  ChildAuthorJsonAvatarBirthtime = 'childAuthorJson___avatar___birthtime',
  ChildAuthorJsonAvatarBirthtimeMs = 'childAuthorJson___avatar___birthtimeMs',
  ChildAuthorJsonAvatarBlksize = 'childAuthorJson___avatar___blksize',
  ChildAuthorJsonAvatarBlocks = 'childAuthorJson___avatar___blocks',
  ChildAuthorJsonAvatarPublicUrl = 'childAuthorJson___avatar___publicURL',
  ChildAuthorJsonAvatarId = 'childAuthorJson___avatar___id',
  ChildAuthorJsonAvatarParentId = 'childAuthorJson___avatar___parent___id',
  ChildAuthorJsonAvatarParentChildren = 'childAuthorJson___avatar___parent___children',
  ChildAuthorJsonAvatarChildren = 'childAuthorJson___avatar___children',
  ChildAuthorJsonAvatarChildrenId = 'childAuthorJson___avatar___children___id',
  ChildAuthorJsonAvatarChildrenChildren = 'childAuthorJson___avatar___children___children',
  ChildAuthorJsonAvatarInternalContent = 'childAuthorJson___avatar___internal___content',
  ChildAuthorJsonAvatarInternalContentDigest = 'childAuthorJson___avatar___internal___contentDigest',
  ChildAuthorJsonAvatarInternalDescription = 'childAuthorJson___avatar___internal___description',
  ChildAuthorJsonAvatarInternalFieldOwners = 'childAuthorJson___avatar___internal___fieldOwners',
  ChildAuthorJsonAvatarInternalIgnoreType = 'childAuthorJson___avatar___internal___ignoreType',
  ChildAuthorJsonAvatarInternalMediaType = 'childAuthorJson___avatar___internal___mediaType',
  ChildAuthorJsonAvatarInternalOwner = 'childAuthorJson___avatar___internal___owner',
  ChildAuthorJsonAvatarInternalType = 'childAuthorJson___avatar___internal___type',
  ChildAuthorJsonAvatarChildMarkdownRemarkId = 'childAuthorJson___avatar___childMarkdownRemark___id',
  ChildAuthorJsonAvatarChildMarkdownRemarkExcerpt = 'childAuthorJson___avatar___childMarkdownRemark___excerpt',
  ChildAuthorJsonAvatarChildMarkdownRemarkRawMarkdownBody = 'childAuthorJson___avatar___childMarkdownRemark___rawMarkdownBody',
  ChildAuthorJsonAvatarChildMarkdownRemarkFileAbsolutePath = 'childAuthorJson___avatar___childMarkdownRemark___fileAbsolutePath',
  ChildAuthorJsonAvatarChildMarkdownRemarkHtml = 'childAuthorJson___avatar___childMarkdownRemark___html',
  ChildAuthorJsonAvatarChildMarkdownRemarkHtmlAst = 'childAuthorJson___avatar___childMarkdownRemark___htmlAst',
  ChildAuthorJsonAvatarChildMarkdownRemarkExcerptAst = 'childAuthorJson___avatar___childMarkdownRemark___excerptAst',
  ChildAuthorJsonAvatarChildMarkdownRemarkHeadings = 'childAuthorJson___avatar___childMarkdownRemark___headings',
  ChildAuthorJsonAvatarChildMarkdownRemarkTimeToRead = 'childAuthorJson___avatar___childMarkdownRemark___timeToRead',
  ChildAuthorJsonAvatarChildMarkdownRemarkTableOfContents = 'childAuthorJson___avatar___childMarkdownRemark___tableOfContents',
  ChildAuthorJsonAvatarChildMarkdownRemarkChildren = 'childAuthorJson___avatar___childMarkdownRemark___children',
  ChildAuthorJsonAvatarChildAuthorJsonId = 'childAuthorJson___avatar___childAuthorJson___id',
  ChildAuthorJsonAvatarChildAuthorJsonChildren = 'childAuthorJson___avatar___childAuthorJson___children',
  ChildAuthorJsonAvatarChildAuthorJsonName = 'childAuthorJson___avatar___childAuthorJson___name',
  ChildAuthorJsonAvatarChildAuthorJsonBio = 'childAuthorJson___avatar___childAuthorJson___bio',
  ChildAuthorJsonAvatarChildAuthorJsonGithub = 'childAuthorJson___avatar___childAuthorJson___github',
  ChildAuthorJsonAvatarChildAuthorJsonTwitter = 'childAuthorJson___avatar___childAuthorJson___twitter',
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  childAuthorJson?: Maybe<AuthorJsonFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
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

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN',
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading'
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
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
  id: Scalars['ID']
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  excerpt?: Maybe<Scalars['String']>
  rawMarkdownBody?: Maybe<Scalars['String']>
  fileAbsolutePath?: Maybe<Scalars['String']>
  fields?: Maybe<MarkdownRemarkFields>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  tableOfContents?: Maybe<Scalars['String']>
  wordCount?: Maybe<MarkdownWordCount>
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
  format?: Maybe<MarkdownExcerptFormats>
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
  pathToSlugField?: Maybe<Scalars['String']>
  maxDepth?: Maybe<Scalars['Int']>
  heading?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection'
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  slug?: Maybe<Scalars['String']>
  pageType?: Maybe<Scalars['String']>
}

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterAuthors = 'frontmatter___authors',
  FrontmatterAuthorsId = 'frontmatter___authors___id',
  FrontmatterAuthorsParentId = 'frontmatter___authors___parent___id',
  FrontmatterAuthorsParentChildren = 'frontmatter___authors___parent___children',
  FrontmatterAuthorsChildren = 'frontmatter___authors___children',
  FrontmatterAuthorsChildrenId = 'frontmatter___authors___children___id',
  FrontmatterAuthorsChildrenChildren = 'frontmatter___authors___children___children',
  FrontmatterAuthorsInternalContent = 'frontmatter___authors___internal___content',
  FrontmatterAuthorsInternalContentDigest = 'frontmatter___authors___internal___contentDigest',
  FrontmatterAuthorsInternalDescription = 'frontmatter___authors___internal___description',
  FrontmatterAuthorsInternalFieldOwners = 'frontmatter___authors___internal___fieldOwners',
  FrontmatterAuthorsInternalIgnoreType = 'frontmatter___authors___internal___ignoreType',
  FrontmatterAuthorsInternalMediaType = 'frontmatter___authors___internal___mediaType',
  FrontmatterAuthorsInternalOwner = 'frontmatter___authors___internal___owner',
  FrontmatterAuthorsInternalType = 'frontmatter___authors___internal___type',
  FrontmatterAuthorsName = 'frontmatter___authors___name',
  FrontmatterAuthorsBio = 'frontmatter___authors___bio',
  FrontmatterAuthorsGithub = 'frontmatter___authors___github',
  FrontmatterAuthorsTwitter = 'frontmatter___authors___twitter',
  FrontmatterAuthorsAvatarSourceInstanceName = 'frontmatter___authors___avatar___sourceInstanceName',
  FrontmatterAuthorsAvatarAbsolutePath = 'frontmatter___authors___avatar___absolutePath',
  FrontmatterAuthorsAvatarRelativePath = 'frontmatter___authors___avatar___relativePath',
  FrontmatterAuthorsAvatarExtension = 'frontmatter___authors___avatar___extension',
  FrontmatterAuthorsAvatarSize = 'frontmatter___authors___avatar___size',
  FrontmatterAuthorsAvatarPrettySize = 'frontmatter___authors___avatar___prettySize',
  FrontmatterAuthorsAvatarModifiedTime = 'frontmatter___authors___avatar___modifiedTime',
  FrontmatterAuthorsAvatarAccessTime = 'frontmatter___authors___avatar___accessTime',
  FrontmatterAuthorsAvatarChangeTime = 'frontmatter___authors___avatar___changeTime',
  FrontmatterAuthorsAvatarBirthTime = 'frontmatter___authors___avatar___birthTime',
  FrontmatterAuthorsAvatarRoot = 'frontmatter___authors___avatar___root',
  FrontmatterAuthorsAvatarDir = 'frontmatter___authors___avatar___dir',
  FrontmatterAuthorsAvatarBase = 'frontmatter___authors___avatar___base',
  FrontmatterAuthorsAvatarExt = 'frontmatter___authors___avatar___ext',
  FrontmatterAuthorsAvatarName = 'frontmatter___authors___avatar___name',
  FrontmatterAuthorsAvatarRelativeDirectory = 'frontmatter___authors___avatar___relativeDirectory',
  FrontmatterAuthorsAvatarDev = 'frontmatter___authors___avatar___dev',
  FrontmatterAuthorsAvatarMode = 'frontmatter___authors___avatar___mode',
  FrontmatterAuthorsAvatarNlink = 'frontmatter___authors___avatar___nlink',
  FrontmatterAuthorsAvatarUid = 'frontmatter___authors___avatar___uid',
  FrontmatterAuthorsAvatarGid = 'frontmatter___authors___avatar___gid',
  FrontmatterAuthorsAvatarRdev = 'frontmatter___authors___avatar___rdev',
  FrontmatterAuthorsAvatarIno = 'frontmatter___authors___avatar___ino',
  FrontmatterAuthorsAvatarAtimeMs = 'frontmatter___authors___avatar___atimeMs',
  FrontmatterAuthorsAvatarMtimeMs = 'frontmatter___authors___avatar___mtimeMs',
  FrontmatterAuthorsAvatarCtimeMs = 'frontmatter___authors___avatar___ctimeMs',
  FrontmatterAuthorsAvatarAtime = 'frontmatter___authors___avatar___atime',
  FrontmatterAuthorsAvatarMtime = 'frontmatter___authors___avatar___mtime',
  FrontmatterAuthorsAvatarCtime = 'frontmatter___authors___avatar___ctime',
  FrontmatterAuthorsAvatarBirthtime = 'frontmatter___authors___avatar___birthtime',
  FrontmatterAuthorsAvatarBirthtimeMs = 'frontmatter___authors___avatar___birthtimeMs',
  FrontmatterAuthorsAvatarBlksize = 'frontmatter___authors___avatar___blksize',
  FrontmatterAuthorsAvatarBlocks = 'frontmatter___authors___avatar___blocks',
  FrontmatterAuthorsAvatarPublicUrl = 'frontmatter___authors___avatar___publicURL',
  FrontmatterAuthorsAvatarId = 'frontmatter___authors___avatar___id',
  FrontmatterAuthorsAvatarChildren = 'frontmatter___authors___avatar___children',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterBackgroundImageSourceInstanceName = 'frontmatter___backgroundImage___sourceInstanceName',
  FrontmatterBackgroundImageAbsolutePath = 'frontmatter___backgroundImage___absolutePath',
  FrontmatterBackgroundImageRelativePath = 'frontmatter___backgroundImage___relativePath',
  FrontmatterBackgroundImageExtension = 'frontmatter___backgroundImage___extension',
  FrontmatterBackgroundImageSize = 'frontmatter___backgroundImage___size',
  FrontmatterBackgroundImagePrettySize = 'frontmatter___backgroundImage___prettySize',
  FrontmatterBackgroundImageModifiedTime = 'frontmatter___backgroundImage___modifiedTime',
  FrontmatterBackgroundImageAccessTime = 'frontmatter___backgroundImage___accessTime',
  FrontmatterBackgroundImageChangeTime = 'frontmatter___backgroundImage___changeTime',
  FrontmatterBackgroundImageBirthTime = 'frontmatter___backgroundImage___birthTime',
  FrontmatterBackgroundImageRoot = 'frontmatter___backgroundImage___root',
  FrontmatterBackgroundImageDir = 'frontmatter___backgroundImage___dir',
  FrontmatterBackgroundImageBase = 'frontmatter___backgroundImage___base',
  FrontmatterBackgroundImageExt = 'frontmatter___backgroundImage___ext',
  FrontmatterBackgroundImageName = 'frontmatter___backgroundImage___name',
  FrontmatterBackgroundImageRelativeDirectory = 'frontmatter___backgroundImage___relativeDirectory',
  FrontmatterBackgroundImageDev = 'frontmatter___backgroundImage___dev',
  FrontmatterBackgroundImageMode = 'frontmatter___backgroundImage___mode',
  FrontmatterBackgroundImageNlink = 'frontmatter___backgroundImage___nlink',
  FrontmatterBackgroundImageUid = 'frontmatter___backgroundImage___uid',
  FrontmatterBackgroundImageGid = 'frontmatter___backgroundImage___gid',
  FrontmatterBackgroundImageRdev = 'frontmatter___backgroundImage___rdev',
  FrontmatterBackgroundImageIno = 'frontmatter___backgroundImage___ino',
  FrontmatterBackgroundImageAtimeMs = 'frontmatter___backgroundImage___atimeMs',
  FrontmatterBackgroundImageMtimeMs = 'frontmatter___backgroundImage___mtimeMs',
  FrontmatterBackgroundImageCtimeMs = 'frontmatter___backgroundImage___ctimeMs',
  FrontmatterBackgroundImageAtime = 'frontmatter___backgroundImage___atime',
  FrontmatterBackgroundImageMtime = 'frontmatter___backgroundImage___mtime',
  FrontmatterBackgroundImageCtime = 'frontmatter___backgroundImage___ctime',
  FrontmatterBackgroundImageBirthtime = 'frontmatter___backgroundImage___birthtime',
  FrontmatterBackgroundImageBirthtimeMs = 'frontmatter___backgroundImage___birthtimeMs',
  FrontmatterBackgroundImageBlksize = 'frontmatter___backgroundImage___blksize',
  FrontmatterBackgroundImageBlocks = 'frontmatter___backgroundImage___blocks',
  FrontmatterBackgroundImagePublicUrl = 'frontmatter___backgroundImage___publicURL',
  FrontmatterBackgroundImageId = 'frontmatter___backgroundImage___id',
  FrontmatterBackgroundImageParentId = 'frontmatter___backgroundImage___parent___id',
  FrontmatterBackgroundImageParentChildren = 'frontmatter___backgroundImage___parent___children',
  FrontmatterBackgroundImageChildren = 'frontmatter___backgroundImage___children',
  FrontmatterBackgroundImageChildrenId = 'frontmatter___backgroundImage___children___id',
  FrontmatterBackgroundImageChildrenChildren = 'frontmatter___backgroundImage___children___children',
  FrontmatterBackgroundImageInternalContent = 'frontmatter___backgroundImage___internal___content',
  FrontmatterBackgroundImageInternalContentDigest = 'frontmatter___backgroundImage___internal___contentDigest',
  FrontmatterBackgroundImageInternalDescription = 'frontmatter___backgroundImage___internal___description',
  FrontmatterBackgroundImageInternalFieldOwners = 'frontmatter___backgroundImage___internal___fieldOwners',
  FrontmatterBackgroundImageInternalIgnoreType = 'frontmatter___backgroundImage___internal___ignoreType',
  FrontmatterBackgroundImageInternalMediaType = 'frontmatter___backgroundImage___internal___mediaType',
  FrontmatterBackgroundImageInternalOwner = 'frontmatter___backgroundImage___internal___owner',
  FrontmatterBackgroundImageInternalType = 'frontmatter___backgroundImage___internal___type',
  FrontmatterBackgroundImageChildMarkdownRemarkId = 'frontmatter___backgroundImage___childMarkdownRemark___id',
  FrontmatterBackgroundImageChildMarkdownRemarkExcerpt = 'frontmatter___backgroundImage___childMarkdownRemark___excerpt',
  FrontmatterBackgroundImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___backgroundImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterBackgroundImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___backgroundImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterBackgroundImageChildMarkdownRemarkHtml = 'frontmatter___backgroundImage___childMarkdownRemark___html',
  FrontmatterBackgroundImageChildMarkdownRemarkHtmlAst = 'frontmatter___backgroundImage___childMarkdownRemark___htmlAst',
  FrontmatterBackgroundImageChildMarkdownRemarkExcerptAst = 'frontmatter___backgroundImage___childMarkdownRemark___excerptAst',
  FrontmatterBackgroundImageChildMarkdownRemarkHeadings = 'frontmatter___backgroundImage___childMarkdownRemark___headings',
  FrontmatterBackgroundImageChildMarkdownRemarkTimeToRead = 'frontmatter___backgroundImage___childMarkdownRemark___timeToRead',
  FrontmatterBackgroundImageChildMarkdownRemarkTableOfContents = 'frontmatter___backgroundImage___childMarkdownRemark___tableOfContents',
  FrontmatterBackgroundImageChildMarkdownRemarkChildren = 'frontmatter___backgroundImage___childMarkdownRemark___children',
  FrontmatterBackgroundImageChildAuthorJsonId = 'frontmatter___backgroundImage___childAuthorJson___id',
  FrontmatterBackgroundImageChildAuthorJsonChildren = 'frontmatter___backgroundImage___childAuthorJson___children',
  FrontmatterBackgroundImageChildAuthorJsonName = 'frontmatter___backgroundImage___childAuthorJson___name',
  FrontmatterBackgroundImageChildAuthorJsonBio = 'frontmatter___backgroundImage___childAuthorJson___bio',
  FrontmatterBackgroundImageChildAuthorJsonGithub = 'frontmatter___backgroundImage___childAuthorJson___github',
  FrontmatterBackgroundImageChildAuthorJsonTwitter = 'frontmatter___backgroundImage___childAuthorJson___twitter',
  FrontmatterBackgroundColor = 'frontmatter___backgroundColor',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  FieldsPageType = 'fields___pageType',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
  pageType?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter'
  title?: Maybe<Scalars['String']>
  date?: Maybe<Scalars['Date']>
  authors?: Maybe<Array<Maybe<AuthorJson>>>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  backgroundImage?: Maybe<File>
  backgroundColor?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  authors?: Maybe<AuthorJsonFilterListInput>
  tags?: Maybe<StringQueryOperatorInput>
  backgroundImage?: Maybe<FileFilterInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
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
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  authorJson?: Maybe<AuthorJson>
  allAuthorJson: AuthorJsonConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  childAuthorJson?: Maybe<AuthorJsonFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  mapping?: Maybe<SiteMappingFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryAuthorJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  bio?: Maybe<StringQueryOperatorInput>
  github?: Maybe<StringQueryOperatorInput>
  twitter?: Maybe<StringQueryOperatorInput>
  avatar?: Maybe<FileFilterInput>
}

export type QueryAllAuthorJsonArgs = {
  filter?: Maybe<AuthorJsonFilterInput>
  sort?: Maybe<AuthorJsonSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  mapping?: Maybe<SiteMapping>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataKeywords = 'siteMetadata___keywords',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
  Port = 'port',
  Host = 'host',
  MappingMarkdownRemarkFrontmatterAuthors = 'mapping___MarkdownRemark_frontmatter_authors',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  mapping?: Maybe<SiteMappingFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
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
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  slug?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsIgnore = 'pluginCreator___pluginOptions___ignore',
  PluginCreatorPluginOptionsExclude = 'pluginCreator___pluginOptions___exclude',
  PluginCreatorPluginOptionsId = 'pluginCreator___pluginOptions___id',
  PluginCreatorPluginOptionsIncludeInDevelopment = 'pluginCreator___pluginOptions___includeInDevelopment',
  PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreatorPluginOptionsEndpoint = 'pluginCreator___pluginOptions___endpoint',
  PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
  PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
  PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
  PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
  PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsIgnore = 'pluginOptions___ignore',
  PluginOptionsExclude = 'pluginOptions___exclude',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsIncludeInDevelopment = 'pluginOptions___includeInDevelopment',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsQuery = 'pluginOptions___query',
  PluginOptionsFeeds = 'pluginOptions___feeds',
  PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
  PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
  PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
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
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
  path?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  ignore?: Maybe<Array<Maybe<Scalars['String']>>>
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
  id?: Maybe<Scalars['String']>
  includeInDevelopment?: Maybe<Scalars['Boolean']>
  siteUrl?: Maybe<Scalars['String']>
  endpoint?: Maybe<Scalars['String']>
  query?: Maybe<Scalars['String']>
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFeeds = {
  __typename?: 'SitePluginPluginOptionsFeeds'
  query?: Maybe<Scalars['String']>
  output?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  title?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  path?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  ignore?: Maybe<StringQueryOperatorInput>
  exclude?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  endpoint?: Maybe<StringQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins'
  resolve?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
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
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type SiteMetadataFragment = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'description' | 'keywords' | 'title' | 'siteUrl'
        >
      >
    }
  >
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query' } & SiteMetadataFragment

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_2_Query = { __typename?: 'Query' } & {
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    edges: Array<
      { __typename?: 'MarkdownRemarkEdge' } & {
        node: { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'id'> & {
            fields?: Maybe<
              { __typename?: 'MarkdownRemarkFields' } & Pick<
                MarkdownRemarkFields,
                'slug'
              >
            >
            frontmatter?: Maybe<
              { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                MarkdownRemarkFrontmatter,
                'title' | 'date' | 'tags'
              > & {
                  backgroundImage?: Maybe<
                    { __typename?: 'File' } & Pick<File, 'publicURL'>
                  >
                }
            >
          }
      }
    >
  }
}

export type Unnamed_3_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_3_Query = { __typename?: 'Query' } & {
  markdownRemark?: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'> & {
        frontmatter?: Maybe<
          { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
            MarkdownRemarkFrontmatter,
            'title'
          >
        >
      }
  >
}

export type Unnamed_4_QueryVariables = Exact<{
  slug: Scalars['String']
}>

export type Unnamed_4_Query = { __typename?: 'Query' } & {
  markdownRemark?: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<
      MarkdownRemark,
      'html' | 'excerpt'
    > & {
        frontmatter?: Maybe<
          { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
            MarkdownRemarkFrontmatter,
            'backgroundColor' | 'title' | 'date' | 'tags'
          > & {
              backgroundImage?: Maybe<
                { __typename?: 'File' } & Pick<File, 'publicURL'>
              >
              authors?: Maybe<
                Array<
                  Maybe<
                    { __typename?: 'AuthorJson' } & Pick<
                      AuthorJson,
                      'id' | 'name' | 'bio' | 'twitter' | 'github'
                    > & {
                        avatar?: Maybe<
                          { __typename?: 'File' } & Pick<
                            File,
                            'id' | 'publicURL'
                          >
                        >
                      }
                  >
                >
              >
            }
        >
      }
  >
}
