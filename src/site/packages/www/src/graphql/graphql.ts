/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
};

export type AdditionalParentNodeModel = {
  __typename?: 'AdditionalParentNodeModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type AdditionalParentNodeModelAutocomplete = {
  __typename?: 'AdditionalParentNodeModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AdditionalParentNodeModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AdditionalParentNodeModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AdditionalParentNodeModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type AdditionalParentNodeModelFacet = {
  __typename?: 'AdditionalParentNodeModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type AdditionalParentNodeModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AdditionalParentNodeModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AdditionalParentNodeModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type AdditionalParentNodeModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type AdditionalParentNodeModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Associations = IContent & IData & {
  __typename?: 'Associations';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type AssociationsNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Associations_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Associations_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AssociationsAutocomplete = {
  __typename?: 'AssociationsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AssociationsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type AssociationsFacet = {
  __typename?: 'AssociationsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type AssociationsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AssociationsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AssociationsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AssociationsFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AssociationsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type AssociationsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type AssociationsModel = {
  __typename?: 'AssociationsModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type AssociationsModelAutocomplete = {
  __typename?: 'AssociationsModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AssociationsModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type AssociationsModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type AssociationsModelFacet = {
  __typename?: 'AssociationsModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type AssociationsModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type AssociationsModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type AssociationsModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type AssociationsModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type AssociationsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type AssociationsOutput = {
  __typename?: 'AssociationsOutput';
  autocomplete?: Maybe<AssociationsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AssociationsFacet>;
  items?: Maybe<Array<Maybe<Associations>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AssociationsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssociationsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<AssociationsWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AssociationsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AssociationsWhereInput>>>;
};

export type BlobModel = {
  __typename?: 'BlobModel';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type BlobModelAutocomplete = {
  __typename?: 'BlobModelAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BlobModelAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlobModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlobModelFacet = {
  __typename?: 'BlobModelFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlobModelFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlobModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlobModelOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
};

export type BlobModelWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BundleContent = IContent & IData & {
  __typename?: 'BundleContent';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  BundleReference?: Maybe<ContentModelReference>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<BundleContentCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoInformation?: Maybe<BundleContentSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BundleContentCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContentDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BundleContentAutocomplete = {
  __typename?: 'BundleContentAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleReference?: Maybe<ContentModelReferenceAutocomplete>;
  Categories?: Maybe<BundleContentCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BundleContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BundleContentCategories = {
  __typename?: 'BundleContentCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type BundleContentCategoriesAutocomplete = {
  __typename?: 'BundleContentCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type BundleContentCategoriesFacet = {
  __typename?: 'BundleContentCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type BundleContentCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type BundleContentCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type BundleContentFacet = {
  __typename?: 'BundleContentFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  BundleReference?: Maybe<ContentModelReferenceFacet>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<BundleContentCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoInformation?: Maybe<BundleContentSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BundleContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type BundleContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BundleContentFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BundleContentFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type BundleContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BundleContentFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BundleContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BundleContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BundleContentOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  BundleReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<BundleContentCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<BundleContentSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BundleContentOutput = {
  __typename?: 'BundleContentOutput';
  autocomplete?: Maybe<BundleContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BundleContentFacet>;
  items?: Maybe<Array<Maybe<BundleContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BundleContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BundleContentSeoInformation = {
  __typename?: 'BundleContentSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type BundleContentSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContentSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BundleContentSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type BundleContentSeoInformationFacet = {
  __typename?: 'BundleContentSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BundleContentSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleContentSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BundleContentSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type BundleContentSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type BundleContentWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  BundleReference?: InputMaybe<ContentModelReferenceWhereInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<BundleContentCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoInformation?: InputMaybe<BundleContentSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BundleContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BundleContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BundleContentWhereInput>>>;
};

export type BundleParentModel = {
  __typename?: 'BundleParentModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type BundleParentModelAutocomplete = {
  __typename?: 'BundleParentModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BundleParentModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleParentModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BundleParentModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BundleParentModelFacet = {
  __typename?: 'BundleParentModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BundleParentModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleParentModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BundleParentModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BundleParentModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type BundleParentModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type BuyOneGetOneDiscountItems = IContent & IData & {
  __typename?: 'BuyOneGetOneDiscountItems';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FreeQuantity?: Maybe<Scalars['Int']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  IsCustomerGetsSame?: Maybe<Scalars['Bool']['output']>;
  Items?: Maybe<Array<Maybe<ContentModelReference>>>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BuyOneGetOneDiscountItemsNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BuyOneGetOneDiscountItems_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BuyOneGetOneDiscountItems_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BuyOneGetOneDiscountItemsAutocomplete = {
  __typename?: 'BuyOneGetOneDiscountItemsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BuyOneGetOneDiscountItemsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BuyOneGetOneDiscountItemsAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BuyOneGetOneDiscountItemsFacet = {
  __typename?: 'BuyOneGetOneDiscountItemsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FreeQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  IsCustomerGetsSame?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<ContentModelReferenceFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BuyOneGetOneDiscountItemsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyOneGetOneDiscountItemsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyOneGetOneDiscountItemsFacetFreeQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type BuyOneGetOneDiscountItemsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetIsCustomerGetsSameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyOneGetOneDiscountItemsFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyOneGetOneDiscountItemsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BuyOneGetOneDiscountItemsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BuyOneGetOneDiscountItemsFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BuyOneGetOneDiscountItemsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FreeQuantity?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  IsCustomerGetsSame?: InputMaybe<OrderBy>;
  Items?: InputMaybe<ContentModelReferenceOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BuyOneGetOneDiscountItemsOutput = {
  __typename?: 'BuyOneGetOneDiscountItemsOutput';
  autocomplete?: Maybe<BuyOneGetOneDiscountItemsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BuyOneGetOneDiscountItemsFacet>;
  items?: Maybe<Array<Maybe<BuyOneGetOneDiscountItems>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BuyOneGetOneDiscountItemsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuyOneGetOneDiscountItemsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FreeQuantity?: InputMaybe<IntFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  IsCustomerGetsSame?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<ContentModelReferenceWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BuyOneGetOneDiscountItemsWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BuyOneGetOneDiscountItemsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BuyOneGetOneDiscountItemsWhereInput>>>;
};

export type CatalogContent = IContent & IData & {
  __typename?: 'CatalogContent';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DefaultCurrency?: Maybe<Scalars['String']['output']>;
  DefaultLanguage?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  IsPrimary?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LengthBase?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Owner?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WeightBase?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CatalogContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CatalogContentAutocomplete = {
  __typename?: 'CatalogContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DefaultCurrency?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DefaultLanguage?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LengthBase?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  Owner?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  WeightBase?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CatalogContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteDefaultCurrencyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteDefaultLanguageArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteLengthBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteOwnerArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocompleteWeightBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CatalogContentFacet = {
  __typename?: 'CatalogContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DefaultCurrency?: Maybe<Array<Maybe<StringFacet>>>;
  DefaultLanguage?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  IsPrimary?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LengthBase?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Owner?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WeightBase?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CatalogContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CatalogContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogContentFacetDefaultCurrencyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetDefaultLanguageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetIsPrimaryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetLengthBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CatalogContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetOwnerArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacetWeightBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CatalogContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  CatalogId?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DefaultCurrency?: InputMaybe<OrderBy>;
  DefaultLanguage?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  IsPrimary?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LengthBase?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Owner?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WeightBase?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogContentOutput = {
  __typename?: 'CatalogContentOutput';
  autocomplete?: Maybe<CatalogContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CatalogContentFacet>;
  items?: Maybe<Array<Maybe<CatalogContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CatalogContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DefaultCurrency?: InputMaybe<StringFilterInput>;
  DefaultLanguage?: InputMaybe<StringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  IsPrimary?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LengthBase?: InputMaybe<StringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  Owner?: InputMaybe<StringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  WeightBase?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CatalogContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CatalogContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CatalogContentWhereInput>>>;
};

export type CatalogImportExportData = IContent & IData & {
  __typename?: 'CatalogImportExportData';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogLink?: Maybe<ContentModelReference>;
  /** The name of catalog */
  CatalogName?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  ExportStatus?: Maybe<Scalars['Int']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  JobId?: Maybe<Scalars['String']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  Progress?: Maybe<Scalars['Int']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CatalogImportExportDataCatalogNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogImportExportDataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogImportExportDataNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogImportExportData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CatalogImportExportData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CatalogImportExportDataAutocomplete = {
  __typename?: 'CatalogImportExportDataAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogLink?: Maybe<ContentModelReferenceAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  JobId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CatalogImportExportDataAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteJobIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CatalogImportExportDataAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CatalogImportExportDataFacet = {
  __typename?: 'CatalogImportExportDataFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogLink?: Maybe<ContentModelReferenceFacet>;
  CatalogName?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  ExportStatus?: Maybe<Array<Maybe<NumberFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  JobId?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  Progress?: Maybe<Array<Maybe<NumberFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CatalogImportExportDataFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetCatalogNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogImportExportDataFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogImportExportDataFacetExportStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CatalogImportExportDataFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetJobIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetProgressArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CatalogImportExportDataFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogImportExportDataFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogImportExportDataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CatalogImportExportDataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CatalogImportExportDataFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CatalogImportExportDataOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  CatalogLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  CatalogName?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  ExportStatus?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  JobId?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Progress?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CatalogImportExportDataOutput = {
  __typename?: 'CatalogImportExportDataOutput';
  autocomplete?: Maybe<CatalogImportExportDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CatalogImportExportDataFacet>;
  items?: Maybe<Array<Maybe<CatalogImportExportData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CatalogImportExportDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CatalogImportExportDataWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  CatalogLink?: InputMaybe<ContentModelReferenceWhereInput>;
  CatalogName?: InputMaybe<SearchableStringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  ExportStatus?: InputMaybe<IntFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  JobId?: InputMaybe<StringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Progress?: InputMaybe<IntFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CatalogImportExportDataWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CatalogImportExportDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CatalogImportExportDataWhereInput>>>;
};

export type Categories = IContent & IData & {
  __typename?: 'Categories';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CategoriesNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Categories_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Categories_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CategoriesAutocomplete = {
  __typename?: 'CategoriesAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CategoriesAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoriesAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CategoriesFacet = {
  __typename?: 'CategoriesFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoriesFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoriesFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoriesFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoriesFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoriesFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoriesFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoriesFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoriesOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CategoriesOutput = {
  __typename?: 'CategoriesOutput';
  autocomplete?: Maybe<CategoriesAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CategoriesFacet>;
  items?: Maybe<Array<Maybe<Categories>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CategoriesOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoriesWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CategoriesWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CategoriesWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CategoriesWhereInput>>>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  Description?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type CategoryModelAutocomplete = {
  __typename?: 'CategoryModelAutocomplete';
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CategoryModelAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoryModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CategoryModelFacet = {
  __typename?: 'CategoryModelFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoryModelFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoryModelFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CategoryModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoryModelOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type CategoryModelWhereInput = {
  Description?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type Content = IContent & IData & {
  __typename?: 'Content';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAreaItemModelSearch = {
  __typename?: 'ContentAreaItemModelSearch';
  ContentLink?: Maybe<ContentModelReferenceSearch>;
  DisplayOption?: Maybe<Scalars['String']['output']>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearch>;
  Tag?: Maybe<Scalars['String']['output']>;
};


export type ContentAreaItemModelSearchContentLinkArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchDisplayOptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchInlineBlockArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentAreaItemModelSearchTagArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentAreaItemModelSearchFacet = {
  __typename?: 'ContentAreaItemModelSearchFacet';
  ContentLink?: Maybe<ContentModelReferenceSearchFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearchFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelSearchFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelSearchFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelSearchOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearchWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  DisplayOption?: InputMaybe<SearchableStringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchWhereInput>;
  Tag?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModel = {
  __typename?: 'ContentLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelAutocomplete = {
  __typename?: 'ContentLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Link?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteLinkArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentLanguageModelFacet = {
  __typename?: 'ContentLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearch = {
  __typename?: 'ContentLanguageModelSearch';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};


export type ContentLanguageModelSearchDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentLanguageModelSearchLinkArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentLanguageModelSearchNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentLanguageModelSearchFacet = {
  __typename?: 'ContentLanguageModelSearchFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelSearchFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelSearchOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearchWhereInput = {
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ContentModelReference = {
  __typename?: 'ContentModelReference';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceAutocomplete = {
  __typename?: 'ContentModelReferenceAutocomplete';
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  ProviderName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentModelReferenceAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteProviderNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentModelReferenceFacet = {
  __typename?: 'ContentModelReferenceFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetWorkIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearch = {
  __typename?: 'ContentModelReferenceSearch';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModelSearch>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};


export type ContentModelReferenceSearchExpandedArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchLanguageArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchProviderNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentModelReferenceSearchUrlArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentModelReferenceSearchFacet = {
  __typename?: 'ContentModelReferenceSearchFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelSearchFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceSearchFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceSearchFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetWorkIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceSearchOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelSearchOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearchWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelSearchWhereInput>;
  ProviderName?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<SearchableStringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentModelReferenceWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  ProviderName?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete?: Maybe<ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentFacet>;
  items?: Maybe<Array<Maybe<IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRootsModel = {
  __typename?: 'ContentRootsModel';
  ContentAssetsRoot?: Maybe<ContentModelReference>;
  GlobalAssetsRoot?: Maybe<ContentModelReference>;
  RootPage?: Maybe<ContentModelReference>;
  SiteAssetsRoot?: Maybe<ContentModelReference>;
  StartPage?: Maybe<ContentModelReference>;
  WasteBasket?: Maybe<ContentModelReference>;
};

export type ContentRootsModelAutocomplete = {
  __typename?: 'ContentRootsModelAutocomplete';
  ContentAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  RootPage?: Maybe<ContentModelReferenceAutocomplete>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  StartPage?: Maybe<ContentModelReferenceAutocomplete>;
  WasteBasket?: Maybe<ContentModelReferenceAutocomplete>;
};

export type ContentRootsModelFacet = {
  __typename?: 'ContentRootsModelFacet';
  ContentAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  RootPage?: Maybe<ContentModelReferenceFacet>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  StartPage?: Maybe<ContentModelReferenceFacet>;
  WasteBasket?: Maybe<ContentModelReferenceFacet>;
};

export type ContentRootsModelOrderByInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  RootPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ContentRootsModelWhereInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  RootPage?: InputMaybe<ContentModelReferenceWhereInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  StartPage?: InputMaybe<ContentModelReferenceWhereInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
};

export type CouponData = IContent & IData & {
  __typename?: 'CouponData';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type CouponDataCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CouponDataNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CouponData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CouponData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CouponDataAutocomplete = {
  __typename?: 'CouponDataAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CouponDataAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CouponDataAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CouponDataFacet = {
  __typename?: 'CouponDataFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CouponDataFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponDataFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponDataFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponDataFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponDataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponDataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CouponDataFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CouponDataOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CouponDataOutput = {
  __typename?: 'CouponDataOutput';
  autocomplete?: Maybe<CouponDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CouponDataFacet>;
  items?: Maybe<Array<Maybe<CouponData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CouponDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CouponDataWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CouponDataWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CouponDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CouponDataWhereInput>>>;
};

export type CustomerPricing = {
  __typename?: 'CustomerPricing';
  PriceCode?: Maybe<Scalars['String']['output']>;
  PriceTypeId?: Maybe<Scalars['Int']['output']>;
};

export type CustomerPricingAutocomplete = {
  __typename?: 'CustomerPricingAutocomplete';
  PriceCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CustomerPricingAutocompletePriceCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CustomerPricingFacet = {
  __typename?: 'CustomerPricingFacet';
  PriceCode?: Maybe<Array<Maybe<StringFacet>>>;
  PriceTypeId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type CustomerPricingFacetPriceCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CustomerPricingFacetPriceTypeIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type CustomerPricingOrderByInput = {
  PriceCode?: InputMaybe<OrderBy>;
  PriceTypeId?: InputMaybe<OrderBy>;
};

export type CustomerPricingWhereInput = {
  PriceCode?: InputMaybe<StringFilterInput>;
  PriceTypeId?: InputMaybe<IntFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscountItems = IContent & IData & {
  __typename?: 'DiscountItems';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Items?: Maybe<Array<Maybe<ContentModelReference>>>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MatchRecursive?: Maybe<Scalars['Bool']['output']>;
  MaxQuantity?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type DiscountItemsNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DiscountItems_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type DiscountItems_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DiscountItemsAutocomplete = {
  __typename?: 'DiscountItemsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DiscountItemsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DiscountItemsAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DiscountItemsFacet = {
  __typename?: 'DiscountItemsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<ContentModelReferenceFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MatchRecursive?: Maybe<Array<Maybe<StringFacet>>>;
  MaxQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DiscountItemsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscountItemsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscountItemsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetMatchRecursiveArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetMaxQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type DiscountItemsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscountItemsFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscountItemsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscountItemsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DiscountItemsFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DiscountItemsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Items?: InputMaybe<ContentModelReferenceOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MatchRecursive?: InputMaybe<OrderBy>;
  MaxQuantity?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DiscountItemsOutput = {
  __typename?: 'DiscountItemsOutput';
  autocomplete?: Maybe<DiscountItemsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DiscountItemsFacet>;
  items?: Maybe<Array<Maybe<DiscountItems>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DiscountItemsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DiscountItemsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<ContentModelReferenceWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MatchRecursive?: InputMaybe<BoolFilterInput>;
  MaxQuantity?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DiscountItemsWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DiscountItemsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DiscountItemsWhereInput>>>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FixedOnePurchaseQuantity = IContent & IData & {
  __typename?: 'FixedOnePurchaseQuantity';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Items?: Maybe<Array<Maybe<ContentModelReference>>>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MatchRecursive?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type FixedOnePurchaseQuantityNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FixedOnePurchaseQuantity_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FixedOnePurchaseQuantity_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FixedOnePurchaseQuantityAutocomplete = {
  __typename?: 'FixedOnePurchaseQuantityAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FixedOnePurchaseQuantityAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedOnePurchaseQuantityAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FixedOnePurchaseQuantityFacet = {
  __typename?: 'FixedOnePurchaseQuantityFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<ContentModelReferenceFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MatchRecursive?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FixedOnePurchaseQuantityFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedOnePurchaseQuantityFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedOnePurchaseQuantityFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetMatchRecursiveArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedOnePurchaseQuantityFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedOnePurchaseQuantityFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedOnePurchaseQuantityFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedOnePurchaseQuantityFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FixedOnePurchaseQuantityOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Items?: InputMaybe<ContentModelReferenceOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MatchRecursive?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type FixedOnePurchaseQuantityOutput = {
  __typename?: 'FixedOnePurchaseQuantityOutput';
  autocomplete?: Maybe<FixedOnePurchaseQuantityAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FixedOnePurchaseQuantityFacet>;
  items?: Maybe<Array<Maybe<FixedOnePurchaseQuantity>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FixedOnePurchaseQuantityOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FixedOnePurchaseQuantityWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<ContentModelReferenceWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MatchRecursive?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FixedOnePurchaseQuantityWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FixedOnePurchaseQuantityWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FixedOnePurchaseQuantityWhereInput>>>;
};

export type FixedPricePurchaseQuantity = IContent & IData & {
  __typename?: 'FixedPricePurchaseQuantity';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Items?: Maybe<Array<Maybe<ContentModelReference>>>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MatchRecursive?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RequiredQuantity?: Maybe<Scalars['Int']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type FixedPricePurchaseQuantityNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FixedPricePurchaseQuantity_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FixedPricePurchaseQuantity_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FixedPricePurchaseQuantityAutocomplete = {
  __typename?: 'FixedPricePurchaseQuantityAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FixedPricePurchaseQuantityAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FixedPricePurchaseQuantityAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FixedPricePurchaseQuantityFacet = {
  __typename?: 'FixedPricePurchaseQuantityFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<ContentModelReferenceFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MatchRecursive?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RequiredQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FixedPricePurchaseQuantityFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedPricePurchaseQuantityFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedPricePurchaseQuantityFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetMatchRecursiveArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetRequiredQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type FixedPricePurchaseQuantityFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedPricePurchaseQuantityFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedPricePurchaseQuantityFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FixedPricePurchaseQuantityFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FixedPricePurchaseQuantityFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FixedPricePurchaseQuantityOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Items?: InputMaybe<ContentModelReferenceOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MatchRecursive?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RequiredQuantity?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type FixedPricePurchaseQuantityOutput = {
  __typename?: 'FixedPricePurchaseQuantityOutput';
  autocomplete?: Maybe<FixedPricePurchaseQuantityAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FixedPricePurchaseQuantityFacet>;
  items?: Maybe<Array<Maybe<FixedPricePurchaseQuantity>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FixedPricePurchaseQuantityOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FixedPricePurchaseQuantityWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<ContentModelReferenceWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MatchRecursive?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RequiredQuantity?: InputMaybe<IntFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FixedPricePurchaseQuantityWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FixedPricePurchaseQuantityWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FixedPricePurchaseQuantityWhereInput>>>;
};

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GenericNode = IContent & IData & {
  __typename?: 'GenericNode';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<GenericNodeCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Css?: Maybe<Scalars['String']['output']>;
  CssFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  DefaultImageUrl?: Maybe<Scalars['String']['output']>;
  DefaultTemplate?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FeaturedProducts?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  HideSiteFooter?: Maybe<Scalars['Bool']['output']>;
  HideSiteHeader?: Maybe<Scalars['Bool']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LongName?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PartialPageSize?: Maybe<Scalars['Int']['output']>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  ScriptFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  Scripts?: Maybe<Scalars['String']['output']>;
  SeoInformation?: Maybe<GenericNodeSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  ShowRecommendations?: Maybe<Scalars['Bool']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Teaser?: Maybe<Scalars['String']['output']>;
  TopContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type GenericNodeCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeCssArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeDefaultTemplateArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeFeaturedProductsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeLongNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeScriptsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeTeaserArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeTopContentAreaArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNode_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNode_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericNodeAutocomplete = {
  __typename?: 'GenericNodeAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Categories?: Maybe<GenericNodeCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CssFiles?: Maybe<LinkItemNodeAutocomplete>;
  DefaultImageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ScriptFiles?: Maybe<LinkItemNodeAutocomplete>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type GenericNodeAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteDefaultImageUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericNodeAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type GenericNodeCategories = {
  __typename?: 'GenericNodeCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type GenericNodeCategoriesAutocomplete = {
  __typename?: 'GenericNodeCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type GenericNodeCategoriesFacet = {
  __typename?: 'GenericNodeCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type GenericNodeCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type GenericNodeCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type GenericNodeFacet = {
  __typename?: 'GenericNodeFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<GenericNodeCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Css?: Maybe<Array<Maybe<StringFacet>>>;
  CssFiles?: Maybe<LinkItemNodeFacet>;
  DefaultImageUrl?: Maybe<Array<Maybe<StringFacet>>>;
  DefaultTemplate?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FeaturedProducts?: Maybe<ContentAreaItemModelSearchFacet>;
  HideSiteFooter?: Maybe<Array<Maybe<StringFacet>>>;
  HideSiteHeader?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LongName?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PartialPageSize?: Maybe<Array<Maybe<NumberFacet>>>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ScriptFiles?: Maybe<LinkItemNodeFacet>;
  Scripts?: Maybe<Array<Maybe<StringFacet>>>;
  SeoInformation?: Maybe<GenericNodeSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  ShowRecommendations?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Teaser?: Maybe<Array<Maybe<StringFacet>>>;
  TopContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericNodeFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericNodeFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericNodeFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericNodeFacetCssArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetDefaultImageUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetDefaultTemplateArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetHideSiteFooterArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetHideSiteHeaderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetLongNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericNodeFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetPartialPageSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericNodeFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericNodeFacetScriptsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetShowRecommendationsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericNodeFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericNodeFacetTeaserArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericNodeOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<GenericNodeCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Css?: InputMaybe<OrderBy>;
  CssFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  DefaultImageUrl?: InputMaybe<OrderBy>;
  DefaultTemplate?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FeaturedProducts?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  HideSiteFooter?: InputMaybe<OrderBy>;
  HideSiteHeader?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LongName?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PartialPageSize?: InputMaybe<OrderBy>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ScriptFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  Scripts?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<GenericNodeSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  ShowRecommendations?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Teaser?: InputMaybe<OrderBy>;
  TopContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericNodeOutput = {
  __typename?: 'GenericNodeOutput';
  autocomplete?: Maybe<GenericNodeAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericNodeFacet>;
  items?: Maybe<Array<Maybe<GenericNode>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericNodeOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericNodeSeoInformation = {
  __typename?: 'GenericNodeSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type GenericNodeSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericNodeSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type GenericNodeSeoInformationFacet = {
  __typename?: 'GenericNodeSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericNodeSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericNodeSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericNodeSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type GenericNodeSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type GenericNodeWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<GenericNodeCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Css?: InputMaybe<SearchableStringFilterInput>;
  CssFiles?: InputMaybe<LinkItemNodeWhereInput>;
  DefaultImageUrl?: InputMaybe<StringFilterInput>;
  DefaultTemplate?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FeaturedProducts?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  HideSiteFooter?: InputMaybe<BoolFilterInput>;
  HideSiteHeader?: InputMaybe<BoolFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LongName?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PartialPageSize?: InputMaybe<IntFilterInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ScriptFiles?: InputMaybe<LinkItemNodeWhereInput>;
  Scripts?: InputMaybe<SearchableStringFilterInput>;
  SeoInformation?: InputMaybe<GenericNodeSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  ShowRecommendations?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Teaser?: InputMaybe<SearchableStringFilterInput>;
  TopContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<GenericNodeWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericNodeWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericNodeWhereInput>>>;
};

/** Generic product supports mutiple products */
export type GenericProduct = IContent & IData & {
  __typename?: 'GenericProduct';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  AssociationsTitle?: Maybe<Scalars['String']['output']>;
  /** Boost product in search results with default sort */
  Boost?: Maybe<Scalars['Int']['output']>;
  Brand?: Maybe<Scalars['String']['output']>;
  BundleParents?: Maybe<Array<Maybe<BundleParentModel>>>;
  /** This will determine whether or not to hide product in search results. */
  Bury?: Maybe<Scalars['Bool']['output']>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<GenericProductCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  Colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Css?: Maybe<Scalars['String']['output']>;
  CssFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  DefaultImageUrl?: Maybe<Scalars['String']['output']>;
  Department?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  HideSiteFooter?: Maybe<Scalars['Bool']['output']>;
  HideSiteHeader?: Maybe<Scalars['Bool']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LegalDisclaimer?: Maybe<Scalars['String']['output']>;
  LongDescription?: Maybe<Scalars['String']['output']>;
  LowestPriceOfVariationPerMarket?: Maybe<Array<Maybe<LowestPriceOfVariationPerMarketModel>>>;
  Manufacturer?: Maybe<Scalars['String']['output']>;
  ManufacturerPartsWarrantyDescription?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Model?: Maybe<Scalars['String']['output']>;
  ModelYear?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  NewArrival?: Maybe<Scalars['Bool']['output']>;
  OnSale?: Maybe<Scalars['Bool']['output']>;
  ParentCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  ProductGroup?: Maybe<Scalars['String']['output']>;
  ProductParents?: Maybe<Array<Maybe<ProductParentModel>>>;
  ProductStatus?: Maybe<Scalars['String']['output']>;
  ProductTeaser?: Maybe<Scalars['String']['output']>;
  ProductTypeName?: Maybe<Scalars['String']['output']>;
  ProductTypeSubcategory?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  ScriptFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  Scripts?: Maybe<Scalars['String']['output']>;
  SeoInformation?: Maybe<GenericProductSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  /** This will determine whether or not to show recommendations. */
  ShowRecommendations?: Maybe<Scalars['Bool']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  Sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Sizing?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  TotalItemsOfAllVariantsInAllWarehouses?: Maybe<Scalars['Int']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  VariantsReference?: Maybe<ContentModelReference>;
  Warranty?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Generic product supports mutiple products */
export type GenericProductAssociationsTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductBrandArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductContentAreaArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductCssArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductDepartmentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductLegalDisclaimerArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductLongDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductManufacturerArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductManufacturerPartsWarrantyDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductModelArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductModelYearArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductProductGroupArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductProductStatusArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductProductTeaserArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductProductTypeNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductProductTypeSubcategoryArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductScriptsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductSizingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProductWarrantyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProduct_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic product supports mutiple products */
export type GenericProduct_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericProductAutocomplete = {
  __typename?: 'GenericProductAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleParents?: Maybe<BundleParentModelAutocomplete>;
  Categories?: Maybe<GenericProductCategoriesAutocomplete>;
  Colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CssFiles?: Maybe<LinkItemNodeAutocomplete>;
  DefaultImageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LowestPriceOfVariationPerMarket?: Maybe<LowestPriceOfVariationPerMarketModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  ProductParents?: Maybe<ProductParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ScriptFiles?: Maybe<LinkItemNodeAutocomplete>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Sizes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VariantsReference?: Maybe<ContentModelReferenceAutocomplete>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type GenericProductAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteColorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteDefaultImageUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteParentCategoriesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteSizesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericProductAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type GenericProductCategories = {
  __typename?: 'GenericProductCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type GenericProductCategoriesAutocomplete = {
  __typename?: 'GenericProductCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type GenericProductCategoriesFacet = {
  __typename?: 'GenericProductCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type GenericProductCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type GenericProductCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type GenericProductFacet = {
  __typename?: 'GenericProductFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  AssociationsTitle?: Maybe<Array<Maybe<StringFacet>>>;
  Boost?: Maybe<Array<Maybe<NumberFacet>>>;
  Brand?: Maybe<Array<Maybe<StringFacet>>>;
  BundleParents?: Maybe<BundleParentModelFacet>;
  Bury?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<GenericProductCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  Colors?: Maybe<Array<Maybe<StringFacet>>>;
  ContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Css?: Maybe<Array<Maybe<StringFacet>>>;
  CssFiles?: Maybe<LinkItemNodeFacet>;
  DefaultImageUrl?: Maybe<Array<Maybe<StringFacet>>>;
  Department?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  HideSiteFooter?: Maybe<Array<Maybe<StringFacet>>>;
  HideSiteHeader?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LegalDisclaimer?: Maybe<Array<Maybe<StringFacet>>>;
  LongDescription?: Maybe<Array<Maybe<StringFacet>>>;
  LowestPriceOfVariationPerMarket?: Maybe<LowestPriceOfVariationPerMarketModelFacet>;
  Manufacturer?: Maybe<Array<Maybe<StringFacet>>>;
  ManufacturerPartsWarrantyDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Model?: Maybe<Array<Maybe<StringFacet>>>;
  ModelYear?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  NewArrival?: Maybe<Array<Maybe<StringFacet>>>;
  OnSale?: Maybe<Array<Maybe<StringFacet>>>;
  ParentCategories?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  ProductGroup?: Maybe<Array<Maybe<StringFacet>>>;
  ProductParents?: Maybe<ProductParentModelFacet>;
  ProductStatus?: Maybe<Array<Maybe<StringFacet>>>;
  ProductTeaser?: Maybe<Array<Maybe<StringFacet>>>;
  ProductTypeName?: Maybe<Array<Maybe<StringFacet>>>;
  ProductTypeSubcategory?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ScriptFiles?: Maybe<LinkItemNodeFacet>;
  Scripts?: Maybe<Array<Maybe<StringFacet>>>;
  SeoInformation?: Maybe<GenericProductSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  ShowRecommendations?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  Sizes?: Maybe<Array<Maybe<StringFacet>>>;
  Sizing?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TotalItemsOfAllVariantsInAllWarehouses?: Maybe<Array<Maybe<NumberFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  VariantsReference?: Maybe<ContentModelReferenceFacet>;
  Warranty?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericProductFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetAssociationsTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetBoostArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericProductFacetBrandArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetBuryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericProductFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericProductFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetColorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericProductFacetCssArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetDefaultImageUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetDepartmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetHideSiteFooterArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetHideSiteHeaderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetLegalDisclaimerArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetLongDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetManufacturerArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetManufacturerPartsWarrantyDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericProductFacetModelArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetModelYearArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetNewArrivalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetOnSaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetParentCategoriesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetProductGroupArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetProductStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetProductTeaserArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetProductTypeNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetProductTypeSubcategoryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericProductFacetScriptsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetShowRecommendationsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetSizesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetSizingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericProductFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericProductFacetTotalItemsOfAllVariantsInAllWarehousesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericProductFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacetWarrantyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericProductOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  AssociationsTitle?: InputMaybe<OrderBy>;
  Boost?: InputMaybe<OrderBy>;
  Brand?: InputMaybe<OrderBy>;
  BundleParents?: InputMaybe<BundleParentModelOrderByInput>;
  Bury?: InputMaybe<OrderBy>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<GenericProductCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  Colors?: InputMaybe<OrderBy>;
  ContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Css?: InputMaybe<OrderBy>;
  CssFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  DefaultImageUrl?: InputMaybe<OrderBy>;
  Department?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  HideSiteFooter?: InputMaybe<OrderBy>;
  HideSiteHeader?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LegalDisclaimer?: InputMaybe<OrderBy>;
  LongDescription?: InputMaybe<OrderBy>;
  LowestPriceOfVariationPerMarket?: InputMaybe<LowestPriceOfVariationPerMarketModelOrderByInput>;
  Manufacturer?: InputMaybe<OrderBy>;
  ManufacturerPartsWarrantyDescription?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Model?: InputMaybe<OrderBy>;
  ModelYear?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  NewArrival?: InputMaybe<OrderBy>;
  OnSale?: InputMaybe<OrderBy>;
  ParentCategories?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  ProductGroup?: InputMaybe<OrderBy>;
  ProductParents?: InputMaybe<ProductParentModelOrderByInput>;
  ProductStatus?: InputMaybe<OrderBy>;
  ProductTeaser?: InputMaybe<OrderBy>;
  ProductTypeName?: InputMaybe<OrderBy>;
  ProductTypeSubcategory?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ScriptFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  Scripts?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<GenericProductSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  ShowRecommendations?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  Sizes?: InputMaybe<OrderBy>;
  Sizing?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TotalItemsOfAllVariantsInAllWarehouses?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  VariantsReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  Warranty?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericProductOutput = {
  __typename?: 'GenericProductOutput';
  autocomplete?: Maybe<GenericProductAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericProductFacet>;
  items?: Maybe<Array<Maybe<GenericProduct>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericProductOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericProductSeoInformation = {
  __typename?: 'GenericProductSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type GenericProductSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericProductSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericProductSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type GenericProductSeoInformationFacet = {
  __typename?: 'GenericProductSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericProductSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericProductSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericProductSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type GenericProductSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type GenericProductWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  AssociationsTitle?: InputMaybe<SearchableStringFilterInput>;
  Boost?: InputMaybe<IntFilterInput>;
  Brand?: InputMaybe<SearchableStringFilterInput>;
  BundleParents?: InputMaybe<BundleParentModelWhereInput>;
  Bury?: InputMaybe<BoolFilterInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<GenericProductCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  Colors?: InputMaybe<StringFilterInput>;
  ContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Css?: InputMaybe<SearchableStringFilterInput>;
  CssFiles?: InputMaybe<LinkItemNodeWhereInput>;
  DefaultImageUrl?: InputMaybe<StringFilterInput>;
  Department?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  HideSiteFooter?: InputMaybe<BoolFilterInput>;
  HideSiteHeader?: InputMaybe<BoolFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LegalDisclaimer?: InputMaybe<SearchableStringFilterInput>;
  LongDescription?: InputMaybe<SearchableStringFilterInput>;
  LowestPriceOfVariationPerMarket?: InputMaybe<LowestPriceOfVariationPerMarketModelWhereInput>;
  Manufacturer?: InputMaybe<SearchableStringFilterInput>;
  ManufacturerPartsWarrantyDescription?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Model?: InputMaybe<SearchableStringFilterInput>;
  ModelYear?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  NewArrival?: InputMaybe<BoolFilterInput>;
  OnSale?: InputMaybe<BoolFilterInput>;
  ParentCategories?: InputMaybe<StringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  ProductGroup?: InputMaybe<SearchableStringFilterInput>;
  ProductParents?: InputMaybe<ProductParentModelWhereInput>;
  ProductStatus?: InputMaybe<SearchableStringFilterInput>;
  ProductTeaser?: InputMaybe<SearchableStringFilterInput>;
  ProductTypeName?: InputMaybe<SearchableStringFilterInput>;
  ProductTypeSubcategory?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ScriptFiles?: InputMaybe<LinkItemNodeWhereInput>;
  Scripts?: InputMaybe<SearchableStringFilterInput>;
  SeoInformation?: InputMaybe<GenericProductSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  ShowRecommendations?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  Sizes?: InputMaybe<StringFilterInput>;
  Sizing?: InputMaybe<SearchableStringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TotalItemsOfAllVariantsInAllWarehouses?: InputMaybe<IntFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  VariantsReference?: InputMaybe<ContentModelReferenceWhereInput>;
  Warranty?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<GenericProductWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericProductWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericProductWhereInput>>>;
};

/** Generic variant supports multiple variation types */
export type GenericVariant = IContent & IData & {
  __typename?: 'GenericVariant';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  AssociationsTitle?: Maybe<Scalars['String']['output']>;
  BundleParents?: Maybe<Array<Maybe<BundleParentModel>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<GenericVariantCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  Color?: Maybe<Scalars['String']['output']>;
  ContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Css?: Maybe<Scalars['String']['output']>;
  CssFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  DefaultImageUrl?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  HideSiteFooter?: Maybe<Scalars['Bool']['output']>;
  HideSiteHeader?: Maybe<Scalars['Bool']['output']>;
  Inventory?: Maybe<InventoryInfoModel>;
  InventoryReference?: Maybe<ContentModelReference>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Mpn?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PackageParents?: Maybe<Array<Maybe<PackageParentModel>>>;
  PackageQuantity?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PartNumber?: Maybe<Scalars['String']['output']>;
  PricePerMarket?: Maybe<Array<Maybe<PricePerMarketModel>>>;
  PriceReference?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  ProductParents?: Maybe<Array<Maybe<ProductParentModel>>>;
  RegionCode?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  ScriptFiles?: Maybe<Array<Maybe<LinkItemNode>>>;
  Scripts?: Maybe<Scalars['String']['output']>;
  SeoInformation?: Maybe<GenericVariantSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  ShippingDimensions?: Maybe<GenericVariantShippingDimensions>;
  ShippingPackageId?: Maybe<Scalars['Int']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  ShowRecommendations?: Maybe<Scalars['Bool']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  Size?: Maybe<Scalars['String']['output']>;
  Sku?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  SubscriptionLength?: Maybe<Scalars['String']['output']>;
  TaxCategoryId?: Maybe<Scalars['Int']['output']>;
  TotalItemsInAllWarehouses?: Maybe<Scalars['Int']['output']>;
  TrackInventory?: Maybe<Scalars['Bool']['output']>;
  Upc?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  VirtualProductMode?: Maybe<Scalars['String']['output']>;
  VirtualProductRole?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantAssociationsTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantColorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantContentAreaArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantCssArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantMpnArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantPackageQuantityArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantPartNumberArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantRegionCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantScriptsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantSizeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantSkuArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantSubscriptionLengthArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantUpcArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantVirtualProductModeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariantVirtualProductRoleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariant_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Generic variant supports multiple variation types */
export type GenericVariant_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericVariantAutocomplete = {
  __typename?: 'GenericVariantAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleParents?: Maybe<BundleParentModelAutocomplete>;
  Categories?: Maybe<GenericVariantCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CssFiles?: Maybe<LinkItemNodeAutocomplete>;
  DefaultImageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Inventory?: Maybe<InventoryInfoModelAutocomplete>;
  InventoryReference?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  PackageParents?: Maybe<PackageParentModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PricePerMarket?: Maybe<PricePerMarketModelAutocomplete>;
  PriceReference?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  ProductParents?: Maybe<ProductParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ScriptFiles?: Maybe<LinkItemNodeAutocomplete>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ShippingDimensions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type GenericVariantAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteDefaultImageUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteShippingDimensionsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type GenericVariantAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type GenericVariantCategories = {
  __typename?: 'GenericVariantCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type GenericVariantCategoriesAutocomplete = {
  __typename?: 'GenericVariantCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type GenericVariantCategoriesFacet = {
  __typename?: 'GenericVariantCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type GenericVariantCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type GenericVariantCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type GenericVariantFacet = {
  __typename?: 'GenericVariantFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  AssociationsTitle?: Maybe<Array<Maybe<StringFacet>>>;
  BundleParents?: Maybe<BundleParentModelFacet>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<GenericVariantCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  Color?: Maybe<Array<Maybe<StringFacet>>>;
  ContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Css?: Maybe<Array<Maybe<StringFacet>>>;
  CssFiles?: Maybe<LinkItemNodeFacet>;
  DefaultImageUrl?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  HideSiteFooter?: Maybe<Array<Maybe<StringFacet>>>;
  HideSiteHeader?: Maybe<Array<Maybe<StringFacet>>>;
  Inventory?: Maybe<InventoryInfoModelFacet>;
  InventoryReference?: Maybe<ContentModelReferenceFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Mpn?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  PackageParents?: Maybe<PackageParentModelFacet>;
  PackageQuantity?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PartNumber?: Maybe<Array<Maybe<StringFacet>>>;
  PricePerMarket?: Maybe<PricePerMarketModelFacet>;
  PriceReference?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  ProductParents?: Maybe<ProductParentModelFacet>;
  RegionCode?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ScriptFiles?: Maybe<LinkItemNodeFacet>;
  Scripts?: Maybe<Array<Maybe<StringFacet>>>;
  SeoInformation?: Maybe<GenericVariantSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  ShippingDimensions?: Maybe<GenericVariantShippingDimensionsFacet>;
  ShippingPackageId?: Maybe<Array<Maybe<NumberFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  ShowRecommendations?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  Size?: Maybe<Array<Maybe<StringFacet>>>;
  Sku?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  SubscriptionLength?: Maybe<Array<Maybe<StringFacet>>>;
  TaxCategoryId?: Maybe<Array<Maybe<NumberFacet>>>;
  TotalItemsInAllWarehouses?: Maybe<Array<Maybe<NumberFacet>>>;
  TrackInventory?: Maybe<Array<Maybe<StringFacet>>>;
  Upc?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  VirtualProductMode?: Maybe<Array<Maybe<StringFacet>>>;
  VirtualProductRole?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericVariantFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetAssociationsTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericVariantFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericVariantFacetCssArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetDefaultImageUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetHideSiteFooterArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetHideSiteHeaderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantFacetMpnArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetPackageQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetPartNumberArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetRegionCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericVariantFacetScriptsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetShippingPackageIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetShowRecommendationsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetSkuArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericVariantFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type GenericVariantFacetSubscriptionLengthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetTaxCategoryIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantFacetTotalItemsInAllWarehousesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantFacetTrackInventoryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetUpcArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetVirtualProductModeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacetVirtualProductRoleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericVariantOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  AssociationsTitle?: InputMaybe<OrderBy>;
  BundleParents?: InputMaybe<BundleParentModelOrderByInput>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<GenericVariantCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  Color?: InputMaybe<OrderBy>;
  ContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Css?: InputMaybe<OrderBy>;
  CssFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  DefaultImageUrl?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  HideSiteFooter?: InputMaybe<OrderBy>;
  HideSiteHeader?: InputMaybe<OrderBy>;
  Inventory?: InputMaybe<InventoryInfoModelOrderByInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Mpn?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  PackageParents?: InputMaybe<PackageParentModelOrderByInput>;
  PackageQuantity?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PartNumber?: InputMaybe<OrderBy>;
  PricePerMarket?: InputMaybe<PricePerMarketModelOrderByInput>;
  PriceReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  ProductParents?: InputMaybe<ProductParentModelOrderByInput>;
  RegionCode?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ScriptFiles?: InputMaybe<LinkItemNodeOrderByInput>;
  Scripts?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<GenericVariantSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  ShippingDimensions?: InputMaybe<GenericVariantShippingDimensionsOrderByInput>;
  ShippingPackageId?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  ShowRecommendations?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  Size?: InputMaybe<OrderBy>;
  Sku?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  SubscriptionLength?: InputMaybe<OrderBy>;
  TaxCategoryId?: InputMaybe<OrderBy>;
  TotalItemsInAllWarehouses?: InputMaybe<OrderBy>;
  TrackInventory?: InputMaybe<OrderBy>;
  Upc?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  VirtualProductMode?: InputMaybe<OrderBy>;
  VirtualProductRole?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericVariantOutput = {
  __typename?: 'GenericVariantOutput';
  autocomplete?: Maybe<GenericVariantAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericVariantFacet>;
  items?: Maybe<Array<Maybe<GenericVariant>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericVariantOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericVariantSeoInformation = {
  __typename?: 'GenericVariantSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type GenericVariantSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericVariantSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericVariantSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type GenericVariantSeoInformationFacet = {
  __typename?: 'GenericVariantSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type GenericVariantSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type GenericVariantSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type GenericVariantSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type GenericVariantSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type GenericVariantShippingDimensions = {
  __typename?: 'GenericVariantShippingDimensions';
  Height?: Maybe<Scalars['Float']['output']>;
  Length?: Maybe<Scalars['Float']['output']>;
  Width?: Maybe<Scalars['Float']['output']>;
};

export type GenericVariantShippingDimensionsFacet = {
  __typename?: 'GenericVariantShippingDimensionsFacet';
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Length?: Maybe<Array<Maybe<NumberFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type GenericVariantShippingDimensionsFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantShippingDimensionsFacetLengthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type GenericVariantShippingDimensionsFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type GenericVariantShippingDimensionsOrderByInput = {
  Height?: InputMaybe<OrderBy>;
  Length?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
};

export type GenericVariantShippingDimensionsWhereInput = {
  Height?: InputMaybe<FloatFilterInput>;
  Length?: InputMaybe<FloatFilterInput>;
  Width?: InputMaybe<FloatFilterInput>;
};

export type GenericVariantWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  AssociationsTitle?: InputMaybe<SearchableStringFilterInput>;
  BundleParents?: InputMaybe<BundleParentModelWhereInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<GenericVariantCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  Color?: InputMaybe<SearchableStringFilterInput>;
  ContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Css?: InputMaybe<SearchableStringFilterInput>;
  CssFiles?: InputMaybe<LinkItemNodeWhereInput>;
  DefaultImageUrl?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  HideSiteFooter?: InputMaybe<BoolFilterInput>;
  HideSiteHeader?: InputMaybe<BoolFilterInput>;
  Inventory?: InputMaybe<InventoryInfoModelWhereInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Mpn?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  PackageParents?: InputMaybe<PackageParentModelWhereInput>;
  PackageQuantity?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PartNumber?: InputMaybe<SearchableStringFilterInput>;
  PricePerMarket?: InputMaybe<PricePerMarketModelWhereInput>;
  PriceReference?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  ProductParents?: InputMaybe<ProductParentModelWhereInput>;
  RegionCode?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ScriptFiles?: InputMaybe<LinkItemNodeWhereInput>;
  Scripts?: InputMaybe<SearchableStringFilterInput>;
  SeoInformation?: InputMaybe<GenericVariantSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  ShippingDimensions?: InputMaybe<GenericVariantShippingDimensionsWhereInput>;
  ShippingPackageId?: InputMaybe<IntFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  ShowRecommendations?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  Size?: InputMaybe<SearchableStringFilterInput>;
  Sku?: InputMaybe<SearchableStringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  SubscriptionLength?: InputMaybe<SearchableStringFilterInput>;
  TaxCategoryId?: InputMaybe<IntFilterInput>;
  TotalItemsInAllWarehouses?: InputMaybe<IntFilterInput>;
  TrackInventory?: InputMaybe<BoolFilterInput>;
  Upc?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  VirtualProductMode?: InputMaybe<SearchableStringFilterInput>;
  VirtualProductRole?: InputMaybe<SearchableStringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<GenericVariantWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericVariantWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericVariantWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = IContent & IData & {
  __typename?: 'HomePage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Heading?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainBody?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HomePageHeadingArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePageMainBodyArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePageNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HomePageAutocomplete = {
  __typename?: 'HomePageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HomePageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HomePageFacet = {
  __typename?: 'HomePageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainBody?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HomePageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetMainBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HomePageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainBody?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageOutput = {
  __typename?: 'HomePageOutput';
  autocomplete?: Maybe<HomePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HomePageFacet>;
  items?: Maybe<Array<Maybe<HomePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HomePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainBody?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
};

export type HostDefinitionModel = {
  __typename?: 'HostDefinitionModel';
  Language?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type HostDefinitionModelAutocomplete = {
  __typename?: 'HostDefinitionModelAutocomplete';
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HostDefinitionModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HostDefinitionModelAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HostDefinitionModelFacet = {
  __typename?: 'HostDefinitionModelFacet';
  Language?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HostDefinitionModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HostDefinitionModelFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HostDefinitionModelOrderByInput = {
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
};

export type HostDefinitionModelWhereInput = {
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
};

export type IContent = {
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaData = IContent & IData & {
  __typename?: 'ImageMediaData';
  AccentColor?: Maybe<Scalars['String']['output']>;
  AltText?: Maybe<Scalars['String']['output']>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Caption?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ClipArtType?: Maybe<Scalars['String']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Copyright?: Maybe<Scalars['String']['output']>;
  Created?: Maybe<Scalars['Date']['output']>;
  CreditsLink?: Maybe<Scalars['String']['output']>;
  CreditsText?: Maybe<Scalars['String']['output']>;
  /** Description of the image */
  Description?: Maybe<Scalars['String']['output']>;
  DominantColorBackground?: Maybe<Scalars['String']['output']>;
  DominantColorForeground?: Maybe<Scalars['String']['output']>;
  DominantColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FileSize?: Maybe<Scalars['String']['output']>;
  ImageCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  IsAdultContent?: Maybe<Scalars['Bool']['output']>;
  IsBwImg?: Maybe<Scalars['Bool']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  IsRacyContent?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LargeThumbnail?: Maybe<BlobModel>;
  LineDrawingType?: Maybe<Scalars['String']['output']>;
  /** Link to content */
  Link?: Maybe<ContentModelReference>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModel>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataAccentColorArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataAltTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataCaptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataClipArtTypeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataCopyrightArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataCreditsTextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataDominantColorBackgroundArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataDominantColorForegroundArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataFileSizeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataLineDrawingTypeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaDataTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


/** Used for image file types such as jpg, jpeg, jpe, ico, gif, bmp, png */
export type ImageMediaData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaDataAutocomplete = {
  __typename?: 'ImageMediaDataAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CreditsLink?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DominantColors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  ImageCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LargeThumbnail?: Maybe<BlobModelAutocomplete>;
  Link?: Maybe<ContentModelReferenceAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ImageMediaDataAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteCreditsLinkArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteDominantColorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteImageCategoriesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteTagsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ImageMediaDataAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ImageMediaDataFacet = {
  __typename?: 'ImageMediaDataFacet';
  AccentColor?: Maybe<Array<Maybe<StringFacet>>>;
  AltText?: Maybe<Array<Maybe<StringFacet>>>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Caption?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ClipArtType?: Maybe<Array<Maybe<StringFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Copyright?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  CreditsLink?: Maybe<Array<Maybe<StringFacet>>>;
  CreditsText?: Maybe<Array<Maybe<StringFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  DominantColorBackground?: Maybe<Array<Maybe<StringFacet>>>;
  DominantColorForeground?: Maybe<Array<Maybe<StringFacet>>>;
  DominantColors?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FileSize?: Maybe<Array<Maybe<StringFacet>>>;
  ImageCategories?: Maybe<Array<Maybe<StringFacet>>>;
  IsAdultContent?: Maybe<Array<Maybe<StringFacet>>>;
  IsBwImg?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  IsRacyContent?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LargeThumbnail?: Maybe<BlobModelFacet>;
  LineDrawingType?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<ContentModelReferenceFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Tags?: Maybe<Array<Maybe<StringFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ImageMediaDataFacetAccentColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetAltTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetCaptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageMediaDataFacetClipArtTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetCopyrightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageMediaDataFacetCreditsLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetCreditsTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetDominantColorBackgroundArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetDominantColorForegroundArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetDominantColorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetFileSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetImageCategoriesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetIsAdultContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetIsBwImgArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetIsRacyContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetLineDrawingTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageMediaDataFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageMediaDataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageMediaDataFacetTagsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ImageMediaDataFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ImageMediaDataOrderByInput = {
  AccentColor?: InputMaybe<OrderBy>;
  AltText?: InputMaybe<OrderBy>;
  Ancestors?: InputMaybe<OrderBy>;
  Caption?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ClipArtType?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Copyright?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  CreditsLink?: InputMaybe<OrderBy>;
  CreditsText?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  DominantColorBackground?: InputMaybe<OrderBy>;
  DominantColorForeground?: InputMaybe<OrderBy>;
  DominantColors?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FileSize?: InputMaybe<OrderBy>;
  ImageCategories?: InputMaybe<OrderBy>;
  IsAdultContent?: InputMaybe<OrderBy>;
  IsBwImg?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  IsRacyContent?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LargeThumbnail?: InputMaybe<BlobModelOrderByInput>;
  LineDrawingType?: InputMaybe<OrderBy>;
  Link?: InputMaybe<ContentModelReferenceOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Tags?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaDataOutput = {
  __typename?: 'ImageMediaDataOutput';
  autocomplete?: Maybe<ImageMediaDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaDataFacet>;
  items?: Maybe<Array<Maybe<ImageMediaData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaDataWhereInput = {
  AccentColor?: InputMaybe<SearchableStringFilterInput>;
  AltText?: InputMaybe<SearchableStringFilterInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Caption?: InputMaybe<SearchableStringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ClipArtType?: InputMaybe<SearchableStringFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Copyright?: InputMaybe<SearchableStringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  CreditsLink?: InputMaybe<StringFilterInput>;
  CreditsText?: InputMaybe<SearchableStringFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  DominantColorBackground?: InputMaybe<SearchableStringFilterInput>;
  DominantColorForeground?: InputMaybe<SearchableStringFilterInput>;
  DominantColors?: InputMaybe<StringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FileSize?: InputMaybe<SearchableStringFilterInput>;
  ImageCategories?: InputMaybe<StringFilterInput>;
  IsAdultContent?: InputMaybe<BoolFilterInput>;
  IsBwImg?: InputMaybe<BoolFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  IsRacyContent?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LargeThumbnail?: InputMaybe<BlobModelWhereInput>;
  LineDrawingType?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<ContentModelReferenceWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Tags?: InputMaybe<StringFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageMediaDataWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaDataWhereInput>>>;
};

export type InlineBlockPropertyModelSearch = {
  __typename?: 'InlineBlockPropertyModelSearch';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type InlineBlockPropertyModelSearchContentTypeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type InlineBlockPropertyModelSearchFacet = {
  __typename?: 'InlineBlockPropertyModelSearchFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelSearchFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelSearchOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearchWhereInput = {
  ContentType?: InputMaybe<SearchableStringFilterInput>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type InventoryInfoModel = {
  __typename?: 'InventoryInfoModel';
  InventoryLocation?: Maybe<Array<Maybe<InventoryLocation>>>;
  MaxQuantity?: Maybe<Scalars['Float']['output']>;
  MinQuantity?: Maybe<Scalars['Float']['output']>;
  Weight?: Maybe<Scalars['Float']['output']>;
};

export type InventoryInfoModelAutocomplete = {
  __typename?: 'InventoryInfoModelAutocomplete';
  InventoryLocation?: Maybe<InventoryLocationAutocomplete>;
};

export type InventoryInfoModelFacet = {
  __typename?: 'InventoryInfoModelFacet';
  InventoryLocation?: Maybe<InventoryLocationFacet>;
  MaxQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  MinQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  Weight?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type InventoryInfoModelFacetMaxQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryInfoModelFacetMinQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryInfoModelFacetWeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type InventoryInfoModelOrderByInput = {
  InventoryLocation?: InputMaybe<InventoryLocationOrderByInput>;
  MaxQuantity?: InputMaybe<OrderBy>;
  MinQuantity?: InputMaybe<OrderBy>;
  Weight?: InputMaybe<OrderBy>;
};

export type InventoryInfoModelWhereInput = {
  InventoryLocation?: InputMaybe<InventoryLocationWhereInput>;
  MaxQuantity?: InputMaybe<FloatFilterInput>;
  MinQuantity?: InputMaybe<FloatFilterInput>;
  Weight?: InputMaybe<FloatFilterInput>;
};

export type InventoryLocation = {
  __typename?: 'InventoryLocation';
  BackorderAvailability?: Maybe<Scalars['String']['output']>;
  BackorderQuantity?: Maybe<Scalars['Float']['output']>;
  InStockQuantity?: Maybe<Scalars['Float']['output']>;
  IsTracked?: Maybe<Scalars['Bool']['output']>;
  PreorderAvailability?: Maybe<Scalars['Date']['output']>;
  PreorderQuantity?: Maybe<Scalars['Float']['output']>;
  PurchaseAvailability?: Maybe<Scalars['Date']['output']>;
  ReorderMinQuantity?: Maybe<Scalars['Float']['output']>;
  WarehouseCode?: Maybe<Scalars['String']['output']>;
};

export type InventoryLocationAutocomplete = {
  __typename?: 'InventoryLocationAutocomplete';
  BackorderAvailability?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  WarehouseCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type InventoryLocationAutocompleteBackorderAvailabilityArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type InventoryLocationAutocompleteWarehouseCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type InventoryLocationFacet = {
  __typename?: 'InventoryLocationFacet';
  BackorderAvailability?: Maybe<Array<Maybe<StringFacet>>>;
  BackorderQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  InStockQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  IsTracked?: Maybe<Array<Maybe<StringFacet>>>;
  PreorderAvailability?: Maybe<Array<Maybe<DateFacet>>>;
  PreorderQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  PurchaseAvailability?: Maybe<Array<Maybe<DateFacet>>>;
  ReorderMinQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  WarehouseCode?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InventoryLocationFacetBackorderAvailabilityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type InventoryLocationFacetBackorderQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryLocationFacetInStockQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryLocationFacetIsTrackedArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type InventoryLocationFacetPreorderAvailabilityArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type InventoryLocationFacetPreorderQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryLocationFacetPurchaseAvailabilityArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type InventoryLocationFacetReorderMinQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type InventoryLocationFacetWarehouseCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InventoryLocationOrderByInput = {
  BackorderAvailability?: InputMaybe<OrderBy>;
  BackorderQuantity?: InputMaybe<OrderBy>;
  InStockQuantity?: InputMaybe<OrderBy>;
  IsTracked?: InputMaybe<OrderBy>;
  PreorderAvailability?: InputMaybe<OrderBy>;
  PreorderQuantity?: InputMaybe<OrderBy>;
  PurchaseAvailability?: InputMaybe<OrderBy>;
  ReorderMinQuantity?: InputMaybe<OrderBy>;
  WarehouseCode?: InputMaybe<OrderBy>;
};

export type InventoryLocationWhereInput = {
  BackorderAvailability?: InputMaybe<StringFilterInput>;
  BackorderQuantity?: InputMaybe<FloatFilterInput>;
  InStockQuantity?: InputMaybe<FloatFilterInput>;
  IsTracked?: InputMaybe<BoolFilterInput>;
  PreorderAvailability?: InputMaybe<DateFilterInput>;
  PreorderQuantity?: InputMaybe<FloatFilterInput>;
  PurchaseAvailability?: InputMaybe<DateFilterInput>;
  ReorderMinQuantity?: InputMaybe<FloatFilterInput>;
  WarehouseCode?: InputMaybe<StringFilterInput>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkItemNode = {
  __typename?: 'LinkItemNode';
  ContentLink?: Maybe<ContentModelReference>;
  Href?: Maybe<Scalars['String']['output']>;
  Target?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};

export type LinkItemNodeAutocomplete = {
  __typename?: 'LinkItemNodeAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  Href?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LinkItemNodeAutocompleteHrefArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkItemNodeFacet = {
  __typename?: 'LinkItemNodeFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  Href?: Maybe<Array<Maybe<StringFacet>>>;
  Target?: Maybe<Array<Maybe<StringFacet>>>;
  Text?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LinkItemNodeFacetHrefArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkItemNodeOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Href?: InputMaybe<OrderBy>;
  Target?: InputMaybe<OrderBy>;
  Text?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type LinkItemNodeWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Href?: InputMaybe<StringFilterInput>;
  Target?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
};

export enum LinkTypes {
  Ancestors = 'ANCESTORS',
  Children = 'CHILDREN',
  Default = 'DEFAULT'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Fr = 'fr',
  Sv = 'sv'
}

export type LowestPriceOfVariationPerMarketModel = {
  __typename?: 'LowestPriceOfVariationPerMarketModel';
  Currency?: Maybe<Scalars['String']['output']>;
  MarketName?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['Float']['output']>;
  VariationCode?: Maybe<Scalars['String']['output']>;
};

export type LowestPriceOfVariationPerMarketModelAutocomplete = {
  __typename?: 'LowestPriceOfVariationPerMarketModelAutocomplete';
  Currency?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MarketName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VariationCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LowestPriceOfVariationPerMarketModelAutocompleteCurrencyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LowestPriceOfVariationPerMarketModelAutocompleteMarketNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LowestPriceOfVariationPerMarketModelAutocompleteVariationCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LowestPriceOfVariationPerMarketModelFacet = {
  __typename?: 'LowestPriceOfVariationPerMarketModelFacet';
  Currency?: Maybe<Array<Maybe<StringFacet>>>;
  MarketName?: Maybe<Array<Maybe<StringFacet>>>;
  Price?: Maybe<Array<Maybe<NumberFacet>>>;
  VariationCode?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LowestPriceOfVariationPerMarketModelFacetCurrencyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LowestPriceOfVariationPerMarketModelFacetMarketNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LowestPriceOfVariationPerMarketModelFacetPriceArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type LowestPriceOfVariationPerMarketModelFacetVariationCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LowestPriceOfVariationPerMarketModelOrderByInput = {
  Currency?: InputMaybe<OrderBy>;
  MarketName?: InputMaybe<OrderBy>;
  Price?: InputMaybe<OrderBy>;
  VariationCode?: InputMaybe<OrderBy>;
};

export type LowestPriceOfVariationPerMarketModelWhereInput = {
  Currency?: InputMaybe<StringFilterInput>;
  MarketName?: InputMaybe<StringFilterInput>;
  Price?: InputMaybe<FloatFilterInput>;
  VariationCode?: InputMaybe<StringFilterInput>;
};

export type MonetaryReward = IContent & IData & {
  __typename?: 'MonetaryReward';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UseAmounts?: Maybe<Scalars['Bool']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type MonetaryRewardNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MonetaryReward_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MonetaryReward_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MonetaryRewardAutocomplete = {
  __typename?: 'MonetaryRewardAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type MonetaryRewardAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MonetaryRewardAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type MonetaryRewardFacet = {
  __typename?: 'MonetaryRewardFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UseAmounts?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type MonetaryRewardFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MonetaryRewardFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MonetaryRewardFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MonetaryRewardFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MonetaryRewardFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MonetaryRewardFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacetUseAmountsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MonetaryRewardFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type MonetaryRewardOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UseAmounts?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MonetaryRewardOutput = {
  __typename?: 'MonetaryRewardOutput';
  autocomplete?: Maybe<MonetaryRewardAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MonetaryRewardFacet>;
  items?: Maybe<Array<Maybe<MonetaryReward>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MonetaryRewardOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MonetaryRewardWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UseAmounts?: InputMaybe<BoolFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<MonetaryRewardWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MonetaryRewardWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MonetaryRewardWhereInput>>>;
};

export type NodeContent = IContent & IData & {
  __typename?: 'NodeContent';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<NodeContentCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoInformation?: Maybe<NodeContentSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NodeContentCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContentDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NodeContentAutocomplete = {
  __typename?: 'NodeContentAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Categories?: Maybe<NodeContentCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type NodeContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NodeContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type NodeContentCategories = {
  __typename?: 'NodeContentCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type NodeContentCategoriesAutocomplete = {
  __typename?: 'NodeContentCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type NodeContentCategoriesFacet = {
  __typename?: 'NodeContentCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type NodeContentCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type NodeContentCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type NodeContentFacet = {
  __typename?: 'NodeContentFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<NodeContentCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoInformation?: Maybe<NodeContentSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type NodeContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type NodeContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NodeContentFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NodeContentFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type NodeContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NodeContentFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NodeContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NodeContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type NodeContentOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<NodeContentCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<NodeContentSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type NodeContentOutput = {
  __typename?: 'NodeContentOutput';
  autocomplete?: Maybe<NodeContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NodeContentFacet>;
  items?: Maybe<Array<Maybe<NodeContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NodeContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NodeContentSeoInformation = {
  __typename?: 'NodeContentSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type NodeContentSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContentSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NodeContentSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NodeContentSeoInformationFacet = {
  __typename?: 'NodeContentSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type NodeContentSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NodeContentSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type NodeContentSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type NodeContentSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type NodeContentWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<NodeContentCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoInformation?: InputMaybe<NodeContentSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<NodeContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NodeContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NodeContentWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PackageContent = IContent & IData & {
  __typename?: 'PackageContent';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  BundleParents?: Maybe<Array<Maybe<BundleParentModel>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<PackageContentCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Inventory?: Maybe<InventoryInfoModel>;
  InventoryReference?: Maybe<ContentModelReference>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PackageParents?: Maybe<Array<Maybe<PackageParentModel>>>;
  PackageReference?: Maybe<ContentModelReference>;
  ParentLink?: Maybe<ContentModelReference>;
  PricePerMarket?: Maybe<Array<Maybe<PricePerMarketModel>>>;
  PriceReference?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoInformation?: Maybe<PackageContentSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  ShippingDimensions?: Maybe<PackageContentShippingDimensions>;
  ShippingPackageId?: Maybe<Scalars['Int']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  TaxCategoryId?: Maybe<Scalars['Int']['output']>;
  TotalItemsInAllWarehouses?: Maybe<Scalars['Int']['output']>;
  TrackInventory?: Maybe<Scalars['Bool']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PackageContentCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContentDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PackageContentAutocomplete = {
  __typename?: 'PackageContentAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleParents?: Maybe<BundleParentModelAutocomplete>;
  Categories?: Maybe<PackageContentCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Inventory?: Maybe<InventoryInfoModelAutocomplete>;
  InventoryReference?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  PackageParents?: Maybe<PackageParentModelAutocomplete>;
  PackageReference?: Maybe<ContentModelReferenceAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PricePerMarket?: Maybe<PricePerMarketModelAutocomplete>;
  PriceReference?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ShippingDimensions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PackageContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteShippingDimensionsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PackageContentCategories = {
  __typename?: 'PackageContentCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type PackageContentCategoriesAutocomplete = {
  __typename?: 'PackageContentCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type PackageContentCategoriesFacet = {
  __typename?: 'PackageContentCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type PackageContentCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type PackageContentCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type PackageContentFacet = {
  __typename?: 'PackageContentFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  BundleParents?: Maybe<BundleParentModelFacet>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<PackageContentCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Inventory?: Maybe<InventoryInfoModelFacet>;
  InventoryReference?: Maybe<ContentModelReferenceFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  PackageParents?: Maybe<PackageParentModelFacet>;
  PackageReference?: Maybe<ContentModelReferenceFacet>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PricePerMarket?: Maybe<PricePerMarketModelFacet>;
  PriceReference?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoInformation?: Maybe<PackageContentSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  ShippingDimensions?: Maybe<PackageContentShippingDimensionsFacet>;
  ShippingPackageId?: Maybe<Array<Maybe<NumberFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TaxCategoryId?: Maybe<Array<Maybe<NumberFacet>>>;
  TotalItemsInAllWarehouses?: Maybe<Array<Maybe<NumberFacet>>>;
  TrackInventory?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PackageContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PackageContentFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PackageContentFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PackageContentFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetShippingPackageIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PackageContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PackageContentFacetTaxCategoryIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentFacetTotalItemsInAllWarehousesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentFacetTrackInventoryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PackageContentOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  BundleParents?: InputMaybe<BundleParentModelOrderByInput>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<PackageContentCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Inventory?: InputMaybe<InventoryInfoModelOrderByInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  PackageParents?: InputMaybe<PackageParentModelOrderByInput>;
  PackageReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PricePerMarket?: InputMaybe<PricePerMarketModelOrderByInput>;
  PriceReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<PackageContentSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  ShippingDimensions?: InputMaybe<PackageContentShippingDimensionsOrderByInput>;
  ShippingPackageId?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TaxCategoryId?: InputMaybe<OrderBy>;
  TotalItemsInAllWarehouses?: InputMaybe<OrderBy>;
  TrackInventory?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PackageContentOutput = {
  __typename?: 'PackageContentOutput';
  autocomplete?: Maybe<PackageContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PackageContentFacet>;
  items?: Maybe<Array<Maybe<PackageContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PackageContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackageContentSeoInformation = {
  __typename?: 'PackageContentSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type PackageContentSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContentSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PackageContentSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type PackageContentSeoInformationFacet = {
  __typename?: 'PackageContentSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PackageContentSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageContentSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PackageContentSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type PackageContentSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type PackageContentShippingDimensions = {
  __typename?: 'PackageContentShippingDimensions';
  Height?: Maybe<Scalars['Float']['output']>;
  Length?: Maybe<Scalars['Float']['output']>;
  Width?: Maybe<Scalars['Float']['output']>;
};

export type PackageContentShippingDimensionsFacet = {
  __typename?: 'PackageContentShippingDimensionsFacet';
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Length?: Maybe<Array<Maybe<NumberFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type PackageContentShippingDimensionsFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentShippingDimensionsFacetLengthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PackageContentShippingDimensionsFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type PackageContentShippingDimensionsOrderByInput = {
  Height?: InputMaybe<OrderBy>;
  Length?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
};

export type PackageContentShippingDimensionsWhereInput = {
  Height?: InputMaybe<FloatFilterInput>;
  Length?: InputMaybe<FloatFilterInput>;
  Width?: InputMaybe<FloatFilterInput>;
};

export type PackageContentWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  BundleParents?: InputMaybe<BundleParentModelWhereInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<PackageContentCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Inventory?: InputMaybe<InventoryInfoModelWhereInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  PackageParents?: InputMaybe<PackageParentModelWhereInput>;
  PackageReference?: InputMaybe<ContentModelReferenceWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PricePerMarket?: InputMaybe<PricePerMarketModelWhereInput>;
  PriceReference?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoInformation?: InputMaybe<PackageContentSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  ShippingDimensions?: InputMaybe<PackageContentShippingDimensionsWhereInput>;
  ShippingPackageId?: InputMaybe<IntFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TaxCategoryId?: InputMaybe<IntFilterInput>;
  TotalItemsInAllWarehouses?: InputMaybe<IntFilterInput>;
  TrackInventory?: InputMaybe<BoolFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PackageContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PackageContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PackageContentWhereInput>>>;
};

export type PackageParentModel = {
  __typename?: 'PackageParentModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type PackageParentModelAutocomplete = {
  __typename?: 'PackageParentModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PackageParentModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageParentModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PackageParentModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PackageParentModelFacet = {
  __typename?: 'PackageParentModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PackageParentModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageParentModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PackageParentModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PackageParentModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type PackageParentModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type PricePerMarketModel = {
  __typename?: 'PricePerMarketModel';
  Currency?: Maybe<Scalars['String']['output']>;
  CustomerPricing?: Maybe<CustomerPricing>;
  MarketId?: Maybe<Scalars['String']['output']>;
  MinQuantity?: Maybe<Scalars['Int']['output']>;
  Price?: Maybe<Scalars['Float']['output']>;
  ValidFrom?: Maybe<Scalars['Date']['output']>;
  ValidUntil?: Maybe<Scalars['Date']['output']>;
  VariantCode?: Maybe<Scalars['String']['output']>;
};

export type PricePerMarketModelAutocomplete = {
  __typename?: 'PricePerMarketModelAutocomplete';
  Currency?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CustomerPricing?: Maybe<CustomerPricingAutocomplete>;
  MarketId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VariantCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PricePerMarketModelAutocompleteCurrencyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PricePerMarketModelAutocompleteMarketIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PricePerMarketModelAutocompleteVariantCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PricePerMarketModelFacet = {
  __typename?: 'PricePerMarketModelFacet';
  Currency?: Maybe<Array<Maybe<StringFacet>>>;
  CustomerPricing?: Maybe<CustomerPricingFacet>;
  MarketId?: Maybe<Array<Maybe<StringFacet>>>;
  MinQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  Price?: Maybe<Array<Maybe<NumberFacet>>>;
  ValidFrom?: Maybe<Array<Maybe<DateFacet>>>;
  ValidUntil?: Maybe<Array<Maybe<DateFacet>>>;
  VariantCode?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PricePerMarketModelFacetCurrencyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PricePerMarketModelFacetMarketIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PricePerMarketModelFacetMinQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PricePerMarketModelFacetPriceArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PricePerMarketModelFacetValidFromArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PricePerMarketModelFacetValidUntilArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PricePerMarketModelFacetVariantCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PricePerMarketModelOrderByInput = {
  Currency?: InputMaybe<OrderBy>;
  CustomerPricing?: InputMaybe<CustomerPricingOrderByInput>;
  MarketId?: InputMaybe<OrderBy>;
  MinQuantity?: InputMaybe<OrderBy>;
  Price?: InputMaybe<OrderBy>;
  ValidFrom?: InputMaybe<OrderBy>;
  ValidUntil?: InputMaybe<OrderBy>;
  VariantCode?: InputMaybe<OrderBy>;
};

export type PricePerMarketModelWhereInput = {
  Currency?: InputMaybe<StringFilterInput>;
  CustomerPricing?: InputMaybe<CustomerPricingWhereInput>;
  MarketId?: InputMaybe<StringFilterInput>;
  MinQuantity?: InputMaybe<IntFilterInput>;
  Price?: InputMaybe<FloatFilterInput>;
  ValidFrom?: InputMaybe<DateFilterInput>;
  ValidUntil?: InputMaybe<DateFilterInput>;
  VariantCode?: InputMaybe<StringFilterInput>;
};

export type PrimaryNodeParentModel = {
  __typename?: 'PrimaryNodeParentModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type PrimaryNodeParentModelAutocomplete = {
  __typename?: 'PrimaryNodeParentModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PrimaryNodeParentModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PrimaryNodeParentModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PrimaryNodeParentModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PrimaryNodeParentModelFacet = {
  __typename?: 'PrimaryNodeParentModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PrimaryNodeParentModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PrimaryNodeParentModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PrimaryNodeParentModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PrimaryNodeParentModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type PrimaryNodeParentModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ProductContent = IContent & IData & {
  __typename?: 'ProductContent';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  BundleParents?: Maybe<Array<Maybe<BundleParentModel>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<ProductContentCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DefaultImageUrl?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LowestPriceOfVariationPerMarket?: Maybe<Array<Maybe<LowestPriceOfVariationPerMarketModel>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  ProductParents?: Maybe<Array<Maybe<ProductParentModel>>>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoInformation?: Maybe<ProductContentSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  TotalItemsOfAllVariantsInAllWarehouses?: Maybe<Scalars['Int']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  VariantsReference?: Maybe<ContentModelReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ProductContentCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContentDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ProductContentAutocomplete = {
  __typename?: 'ProductContentAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleParents?: Maybe<BundleParentModelAutocomplete>;
  Categories?: Maybe<ProductContentCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DefaultImageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LowestPriceOfVariationPerMarket?: Maybe<LowestPriceOfVariationPerMarketModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  ProductParents?: Maybe<ProductParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VariantsReference?: Maybe<ContentModelReferenceAutocomplete>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ProductContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteDefaultImageUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ProductContentCategories = {
  __typename?: 'ProductContentCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type ProductContentCategoriesAutocomplete = {
  __typename?: 'ProductContentCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type ProductContentCategoriesFacet = {
  __typename?: 'ProductContentCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type ProductContentCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ProductContentCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ProductContentFacet = {
  __typename?: 'ProductContentFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  BundleParents?: Maybe<BundleParentModelFacet>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<ProductContentCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DefaultImageUrl?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LowestPriceOfVariationPerMarket?: Maybe<LowestPriceOfVariationPerMarketModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  ProductParents?: Maybe<ProductParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoInformation?: Maybe<ProductContentSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TotalItemsOfAllVariantsInAllWarehouses?: Maybe<Array<Maybe<NumberFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  VariantsReference?: Maybe<ContentModelReferenceFacet>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ProductContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ProductContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductContentFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductContentFacetDefaultImageUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ProductContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductContentFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductContentFacetTotalItemsOfAllVariantsInAllWarehousesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ProductContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductContentOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  BundleParents?: InputMaybe<BundleParentModelOrderByInput>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<ProductContentCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DefaultImageUrl?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LowestPriceOfVariationPerMarket?: InputMaybe<LowestPriceOfVariationPerMarketModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  ProductParents?: InputMaybe<ProductParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<ProductContentSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TotalItemsOfAllVariantsInAllWarehouses?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  VariantsReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductContentOutput = {
  __typename?: 'ProductContentOutput';
  autocomplete?: Maybe<ProductContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ProductContentFacet>;
  items?: Maybe<Array<Maybe<ProductContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ProductContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductContentSeoInformation = {
  __typename?: 'ProductContentSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type ProductContentSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContentSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProductContentSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ProductContentSeoInformationFacet = {
  __typename?: 'ProductContentSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ProductContentSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductContentSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductContentSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type ProductContentSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type ProductContentWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  BundleParents?: InputMaybe<BundleParentModelWhereInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<ProductContentCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DefaultImageUrl?: InputMaybe<StringFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LowestPriceOfVariationPerMarket?: InputMaybe<LowestPriceOfVariationPerMarketModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  ProductParents?: InputMaybe<ProductParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoInformation?: InputMaybe<ProductContentSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TotalItemsOfAllVariantsInAllWarehouses?: InputMaybe<IntFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  VariantsReference?: InputMaybe<ContentModelReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ProductContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ProductContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ProductContentWhereInput>>>;
};

export type ProductParentModel = {
  __typename?: 'ProductParentModel';
  ContentType?: Maybe<Scalars['String']['output']>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ProductParentModelAutocomplete = {
  __typename?: 'ProductParentModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ProductParentModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductParentModelAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductParentModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ProductParentModelFacet = {
  __typename?: 'ProductParentModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ProductParentModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductParentModelFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductParentModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductParentModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
  GuidValue?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ProductParentModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
  GuidValue?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type PromotionSchedule = IContent & IData & {
  __typename?: 'PromotionSchedule';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CampaignLink?: Maybe<ContentModelReference>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UseCampaignDate?: Maybe<Scalars['Bool']['output']>;
  ValidFrom?: Maybe<Scalars['Date']['output']>;
  ValidUntil?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PromotionScheduleNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PromotionSchedule_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PromotionSchedule_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PromotionScheduleAutocomplete = {
  __typename?: 'PromotionScheduleAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CampaignLink?: Maybe<ContentModelReferenceAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PromotionScheduleAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PromotionScheduleAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PromotionScheduleFacet = {
  __typename?: 'PromotionScheduleFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CampaignLink?: Maybe<ContentModelReferenceFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UseCampaignDate?: Maybe<Array<Maybe<StringFacet>>>;
  ValidFrom?: Maybe<Array<Maybe<DateFacet>>>;
  ValidUntil?: Maybe<Array<Maybe<DateFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PromotionScheduleFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetUseCampaignDateArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PromotionScheduleFacetValidFromArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacetValidUntilArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotionScheduleFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PromotionScheduleOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  CampaignLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UseCampaignDate?: InputMaybe<OrderBy>;
  ValidFrom?: InputMaybe<OrderBy>;
  ValidUntil?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PromotionScheduleOutput = {
  __typename?: 'PromotionScheduleOutput';
  autocomplete?: Maybe<PromotionScheduleAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PromotionScheduleFacet>;
  items?: Maybe<Array<Maybe<PromotionSchedule>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PromotionScheduleOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PromotionScheduleWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  CampaignLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UseCampaignDate?: InputMaybe<BoolFilterInput>;
  ValidFrom?: InputMaybe<DateFilterInput>;
  ValidUntil?: InputMaybe<DateFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PromotionScheduleWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PromotionScheduleWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PromotionScheduleWhereInput>>>;
};

export type PurchaseAmount = IContent & IData & {
  __typename?: 'PurchaseAmount';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PurchaseAmountNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PurchaseAmount_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PurchaseAmount_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PurchaseAmountAutocomplete = {
  __typename?: 'PurchaseAmountAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PurchaseAmountAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseAmountAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PurchaseAmountFacet = {
  __typename?: 'PurchaseAmountFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PurchaseAmountFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseAmountFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseAmountFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseAmountFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseAmountFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseAmountFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseAmountFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PurchaseAmountOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PurchaseAmountOutput = {
  __typename?: 'PurchaseAmountOutput';
  autocomplete?: Maybe<PurchaseAmountAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PurchaseAmountFacet>;
  items?: Maybe<Array<Maybe<PurchaseAmount>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PurchaseAmountOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PurchaseAmountWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PurchaseAmountWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PurchaseAmountWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PurchaseAmountWhereInput>>>;
};

export type PurchaseQuantity = IContent & IData & {
  __typename?: 'PurchaseQuantity';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Items?: Maybe<Array<Maybe<ContentModelReference>>>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MatchRecursive?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RequiredQuantity?: Maybe<Scalars['Int']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PurchaseQuantityNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PurchaseQuantity_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PurchaseQuantity_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PurchaseQuantityAutocomplete = {
  __typename?: 'PurchaseQuantityAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Items?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PurchaseQuantityAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PurchaseQuantityAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PurchaseQuantityFacet = {
  __typename?: 'PurchaseQuantityFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Items?: Maybe<ContentModelReferenceFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MatchRecursive?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RequiredQuantity?: Maybe<Array<Maybe<NumberFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PurchaseQuantityFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseQuantityFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseQuantityFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetMatchRecursiveArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetRequiredQuantityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type PurchaseQuantityFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseQuantityFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseQuantityFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PurchaseQuantityFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PurchaseQuantityFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PurchaseQuantityOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Items?: InputMaybe<ContentModelReferenceOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MatchRecursive?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RequiredQuantity?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PurchaseQuantityOutput = {
  __typename?: 'PurchaseQuantityOutput';
  autocomplete?: Maybe<PurchaseQuantityAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PurchaseQuantityFacet>;
  items?: Maybe<Array<Maybe<PurchaseQuantity>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PurchaseQuantityOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PurchaseQuantityWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Items?: InputMaybe<ContentModelReferenceWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MatchRecursive?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RequiredQuantity?: InputMaybe<IntFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PurchaseQuantityWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PurchaseQuantityWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PurchaseQuantityWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  Associations?: Maybe<AssociationsOutput>;
  BundleContent?: Maybe<BundleContentOutput>;
  BuyOneGetOneDiscountItems?: Maybe<BuyOneGetOneDiscountItemsOutput>;
  CatalogContent?: Maybe<CatalogContentOutput>;
  CatalogImportExportData?: Maybe<CatalogImportExportDataOutput>;
  Categories?: Maybe<CategoriesOutput>;
  Content?: Maybe<ContentOutput>;
  CouponData?: Maybe<CouponDataOutput>;
  Data?: Maybe<DataOutput>;
  DiscountItems?: Maybe<DiscountItemsOutput>;
  FixedOnePurchaseQuantity?: Maybe<FixedOnePurchaseQuantityOutput>;
  FixedPricePurchaseQuantity?: Maybe<FixedPricePurchaseQuantityOutput>;
  GenericNode?: Maybe<GenericNodeOutput>;
  GenericProduct?: Maybe<GenericProductOutput>;
  GenericVariant?: Maybe<GenericVariantOutput>;
  HomePage?: Maybe<HomePageOutput>;
  ImageMediaData?: Maybe<ImageMediaDataOutput>;
  MonetaryReward?: Maybe<MonetaryRewardOutput>;
  NodeContent?: Maybe<NodeContentOutput>;
  PackageContent?: Maybe<PackageContentOutput>;
  ProductContent?: Maybe<ProductContentOutput>;
  PromotionSchedule?: Maybe<PromotionScheduleOutput>;
  PurchaseAmount?: Maybe<PurchaseAmountOutput>;
  PurchaseQuantity?: Maybe<PurchaseQuantityOutput>;
  RedemptionLimitsData?: Maybe<RedemptionLimitsDataOutput>;
  Relations?: Maybe<RelationsOutput>;
  ReportingMediaData?: Maybe<ReportingMediaDataOutput>;
  SeoInformation?: Maybe<SeoInformationOutput>;
  ShippingDimensions?: Maybe<ShippingDimensionsOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  VariationContent?: Maybe<VariationContentOutput>;
};


export type QueryAssociationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AssociationsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AssociationsWhereInput>;
};


export type QueryBundleContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BundleContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BundleContentWhereInput>;
};


export type QueryBuyOneGetOneDiscountItemsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyOneGetOneDiscountItemsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BuyOneGetOneDiscountItemsWhereInput>;
};


export type QueryCatalogContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CatalogContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CatalogContentWhereInput>;
};


export type QueryCatalogImportExportDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CatalogImportExportDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CatalogImportExportDataWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CategoriesOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryCouponDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CouponDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CouponDataWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryDiscountItemsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DiscountItemsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DiscountItemsWhereInput>;
};


export type QueryFixedOnePurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FixedOnePurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FixedOnePurchaseQuantityWhereInput>;
};


export type QueryFixedPricePurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FixedPricePurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FixedPricePurchaseQuantityWhereInput>;
};


export type QueryGenericNodeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericNodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericNodeWhereInput>;
};


export type QueryGenericProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericProductWhereInput>;
};


export type QueryGenericVariantArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericVariantWhereInput>;
};


export type QueryHomePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryImageMediaDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaDataWhereInput>;
};


export type QueryMonetaryRewardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MonetaryRewardOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MonetaryRewardWhereInput>;
};


export type QueryNodeContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NodeContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NodeContentWhereInput>;
};


export type QueryPackageContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PackageContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PackageContentWhereInput>;
};


export type QueryProductContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ProductContentWhereInput>;
};


export type QueryPromotionScheduleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PromotionScheduleOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PromotionScheduleWhereInput>;
};


export type QueryPurchaseAmountArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PurchaseAmountOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PurchaseAmountWhereInput>;
};


export type QueryPurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PurchaseQuantityWhereInput>;
};


export type QueryRedemptionLimitsDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RedemptionLimitsDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RedemptionLimitsDataWhereInput>;
};


export type QueryRelationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RelationsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RelationsWhereInput>;
};


export type QueryReportingMediaDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ReportingMediaDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ReportingMediaDataWhereInput>;
};


export type QuerySeoInformationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SeoInformationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SeoInformationWhereInput>;
};


export type QueryShippingDimensionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ShippingDimensionsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ShippingDimensionsWhereInput>;
};


export type QuerySiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryVariationContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VariationContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VariationContentWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  Associations?: Maybe<AssociationsOutput>;
  BundleContent?: Maybe<BundleContentOutput>;
  BuyOneGetOneDiscountItems?: Maybe<BuyOneGetOneDiscountItemsOutput>;
  CatalogContent?: Maybe<CatalogContentOutput>;
  CatalogImportExportData?: Maybe<CatalogImportExportDataOutput>;
  Categories?: Maybe<CategoriesOutput>;
  Content?: Maybe<ContentOutput>;
  CouponData?: Maybe<CouponDataOutput>;
  Data?: Maybe<DataOutput>;
  DiscountItems?: Maybe<DiscountItemsOutput>;
  FixedOnePurchaseQuantity?: Maybe<FixedOnePurchaseQuantityOutput>;
  FixedPricePurchaseQuantity?: Maybe<FixedPricePurchaseQuantityOutput>;
  GenericNode?: Maybe<GenericNodeOutput>;
  GenericProduct?: Maybe<GenericProductOutput>;
  GenericVariant?: Maybe<GenericVariantOutput>;
  HomePage?: Maybe<HomePageOutput>;
  ImageMediaData?: Maybe<ImageMediaDataOutput>;
  MonetaryReward?: Maybe<MonetaryRewardOutput>;
  NodeContent?: Maybe<NodeContentOutput>;
  PackageContent?: Maybe<PackageContentOutput>;
  ProductContent?: Maybe<ProductContentOutput>;
  PromotionSchedule?: Maybe<PromotionScheduleOutput>;
  PurchaseAmount?: Maybe<PurchaseAmountOutput>;
  PurchaseQuantity?: Maybe<PurchaseQuantityOutput>;
  RedemptionLimitsData?: Maybe<RedemptionLimitsDataOutput>;
  Relations?: Maybe<RelationsOutput>;
  ReportingMediaData?: Maybe<ReportingMediaDataOutput>;
  SeoInformation?: Maybe<SeoInformationOutput>;
  ShippingDimensions?: Maybe<ShippingDimensionsOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  VariationContent?: Maybe<VariationContentOutput>;
};


export type QueryRefAssociationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AssociationsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<AssociationsWhereInput>;
};


export type QueryRefBundleContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BundleContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BundleContentWhereInput>;
};


export type QueryRefBuyOneGetOneDiscountItemsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BuyOneGetOneDiscountItemsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BuyOneGetOneDiscountItemsWhereInput>;
};


export type QueryRefCatalogContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CatalogContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CatalogContentWhereInput>;
};


export type QueryRefCatalogImportExportDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CatalogImportExportDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CatalogImportExportDataWhereInput>;
};


export type QueryRefCategoriesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CategoriesOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CategoriesWhereInput>;
};


export type QueryRefContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryRefCouponDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CouponDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<CouponDataWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefDiscountItemsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DiscountItemsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DiscountItemsWhereInput>;
};


export type QueryRefFixedOnePurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FixedOnePurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FixedOnePurchaseQuantityWhereInput>;
};


export type QueryRefFixedPricePurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FixedPricePurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FixedPricePurchaseQuantityWhereInput>;
};


export type QueryRefGenericNodeArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericNodeOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericNodeWhereInput>;
};


export type QueryRefGenericProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericProductOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericProductWhereInput>;
};


export type QueryRefGenericVariantArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericVariantOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericVariantWhereInput>;
};


export type QueryRefHomePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryRefImageMediaDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaDataWhereInput>;
};


export type QueryRefMonetaryRewardArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MonetaryRewardOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<MonetaryRewardWhereInput>;
};


export type QueryRefNodeContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NodeContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<NodeContentWhereInput>;
};


export type QueryRefPackageContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PackageContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PackageContentWhereInput>;
};


export type QueryRefProductContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ProductContentWhereInput>;
};


export type QueryRefPromotionScheduleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PromotionScheduleOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PromotionScheduleWhereInput>;
};


export type QueryRefPurchaseAmountArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PurchaseAmountOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PurchaseAmountWhereInput>;
};


export type QueryRefPurchaseQuantityArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PurchaseQuantityOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<PurchaseQuantityWhereInput>;
};


export type QueryRefRedemptionLimitsDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RedemptionLimitsDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RedemptionLimitsDataWhereInput>;
};


export type QueryRefRelationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<RelationsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<RelationsWhereInput>;
};


export type QueryRefReportingMediaDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ReportingMediaDataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ReportingMediaDataWhereInput>;
};


export type QueryRefSeoInformationArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SeoInformationOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SeoInformationWhereInput>;
};


export type QueryRefShippingDimensionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ShippingDimensionsOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ShippingDimensionsWhereInput>;
};


export type QueryRefSiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryRefVariationContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VariationContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VariationContentWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RedemptionLimitsData = IContent & IData & {
  __typename?: 'RedemptionLimitsData';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PerCustomer?: Maybe<Scalars['Int']['output']>;
  PerOrderForm?: Maybe<Scalars['Int']['output']>;
  PerPromotion?: Maybe<Scalars['Int']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type RedemptionLimitsDataNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type RedemptionLimitsData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type RedemptionLimitsData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type RedemptionLimitsDataAutocomplete = {
  __typename?: 'RedemptionLimitsDataAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RedemptionLimitsDataAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RedemptionLimitsDataAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RedemptionLimitsDataFacet = {
  __typename?: 'RedemptionLimitsDataFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PerCustomer?: Maybe<Array<Maybe<NumberFacet>>>;
  PerOrderForm?: Maybe<Array<Maybe<NumberFacet>>>;
  PerPromotion?: Maybe<Array<Maybe<NumberFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RedemptionLimitsDataFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RedemptionLimitsDataFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RedemptionLimitsDataFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetPerCustomerArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RedemptionLimitsDataFacetPerOrderFormArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RedemptionLimitsDataFacetPerPromotionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type RedemptionLimitsDataFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RedemptionLimitsDataFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RedemptionLimitsDataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RedemptionLimitsDataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RedemptionLimitsDataFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RedemptionLimitsDataOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PerCustomer?: InputMaybe<OrderBy>;
  PerOrderForm?: InputMaybe<OrderBy>;
  PerPromotion?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type RedemptionLimitsDataOutput = {
  __typename?: 'RedemptionLimitsDataOutput';
  autocomplete?: Maybe<RedemptionLimitsDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<RedemptionLimitsDataFacet>;
  items?: Maybe<Array<Maybe<RedemptionLimitsData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type RedemptionLimitsDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RedemptionLimitsDataWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PerCustomer?: InputMaybe<IntFilterInput>;
  PerOrderForm?: InputMaybe<IntFilterInput>;
  PerPromotion?: InputMaybe<IntFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<RedemptionLimitsDataWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<RedemptionLimitsDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<RedemptionLimitsDataWhereInput>>>;
};

export type Relations = IContent & IData & {
  __typename?: 'Relations';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type RelationsNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Relations_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Relations_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type RelationsAutocomplete = {
  __typename?: 'RelationsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RelationsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type RelationsAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RelationsFacet = {
  __typename?: 'RelationsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RelationsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RelationsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RelationsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RelationsFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RelationsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type RelationsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type RelationsFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RelationsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type RelationsOutput = {
  __typename?: 'RelationsOutput';
  autocomplete?: Maybe<RelationsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<RelationsFacet>;
  items?: Maybe<Array<Maybe<Relations>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type RelationsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RelationsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<RelationsWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<RelationsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<RelationsWhereInput>>>;
};

export type ReportingMediaData = IContent & IData & {
  __typename?: 'ReportingMediaData';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ReportingMediaDataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ReportingMediaDataNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ReportingMediaData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ReportingMediaData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ReportingMediaDataAutocomplete = {
  __typename?: 'ReportingMediaDataAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ReportingMediaDataAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ReportingMediaDataAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ReportingMediaDataFacet = {
  __typename?: 'ReportingMediaDataFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ReportingMediaDataFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ReportingMediaDataFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ReportingMediaDataFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ReportingMediaDataFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ReportingMediaDataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ReportingMediaDataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ReportingMediaDataFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ReportingMediaDataOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ReportingMediaDataOutput = {
  __typename?: 'ReportingMediaDataOutput';
  autocomplete?: Maybe<ReportingMediaDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ReportingMediaDataFacet>;
  items?: Maybe<Array<Maybe<ReportingMediaData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ReportingMediaDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReportingMediaDataWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ReportingMediaDataWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ReportingMediaDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ReportingMediaDataWhereInput>>>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SeoInformation = IContent & IData & {
  __typename?: 'SeoInformation';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SeoInformationNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SeoInformation_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SeoInformation_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SeoInformationAutocomplete = {
  __typename?: 'SeoInformationAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SeoInformationAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SeoInformationAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SeoInformationFacet = {
  __typename?: 'SeoInformationFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SeoInformationFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoInformationFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoInformationFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoInformationFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SeoInformationFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SeoInformationOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SeoInformationOutput = {
  __typename?: 'SeoInformationOutput';
  autocomplete?: Maybe<SeoInformationAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SeoInformationFacet>;
  items?: Maybe<Array<Maybe<SeoInformation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SeoInformationOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoInformationWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SeoInformationWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SeoInformationWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SeoInformationWhereInput>>>;
};

export type ShippingDimensions = IContent & IData & {
  __typename?: 'ShippingDimensions';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Height?: Maybe<Scalars['Float']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  Length?: Maybe<Scalars['Float']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ShippingDimensionsNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ShippingDimensions_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ShippingDimensions_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ShippingDimensionsAutocomplete = {
  __typename?: 'ShippingDimensionsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ShippingDimensionsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ShippingDimensionsAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ShippingDimensionsFacet = {
  __typename?: 'ShippingDimensionsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  Length?: Maybe<Array<Maybe<NumberFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ShippingDimensionsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ShippingDimensionsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ShippingDimensionsFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ShippingDimensionsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetLengthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ShippingDimensionsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ShippingDimensionsFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ShippingDimensionsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ShippingDimensionsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ShippingDimensionsFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ShippingDimensionsFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ShippingDimensionsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Height?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Length?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ShippingDimensionsOutput = {
  __typename?: 'ShippingDimensionsOutput';
  autocomplete?: Maybe<ShippingDimensionsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ShippingDimensionsFacet>;
  items?: Maybe<Array<Maybe<ShippingDimensions>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ShippingDimensionsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShippingDimensionsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Height?: InputMaybe<FloatFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Length?: InputMaybe<FloatFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  Width?: InputMaybe<FloatFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ShippingDimensionsWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ShippingDimensionsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ShippingDimensionsWhereInput>>>;
};

export type SiteDefinition = IData & {
  __typename?: 'SiteDefinition';
  ContentLink?: Maybe<ContentModelReference>;
  ContentRoots?: Maybe<ContentRootsModel>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Scalars['String']['output']>;
  Hosts?: Maybe<Array<Maybe<HostDefinitionModel>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Languages?: Maybe<Array<Maybe<SiteDefinitionLanguageModel>>>;
  Name?: Maybe<Scalars['String']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SiteDefinitionNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteDefinition_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SiteDefinition_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SiteDefinitionAutocomplete = {
  __typename?: 'SiteDefinitionAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentRoots?: Maybe<ContentRootsModelAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Hosts?: Maybe<HostDefinitionModelAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelAutocomplete>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteEditLocationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionFacet = {
  __typename?: 'SiteDefinitionFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentRoots?: Maybe<ContentRootsModelFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  EditLocation?: Maybe<Array<Maybe<StringFacet>>>;
  Hosts?: Maybe<HostDefinitionModelFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetEditLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModel = {
  __typename?: 'SiteDefinitionLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  IsMasterLanguage?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UrlSegment?: Maybe<Scalars['String']['output']>;
};

export type SiteDefinitionLanguageModelAutocomplete = {
  __typename?: 'SiteDefinitionLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionLanguageModelFacet = {
  __typename?: 'SiteDefinitionLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  IsMasterLanguage?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetIsMasterLanguageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  IsMasterLanguage?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
};

export type SiteDefinitionLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  IsMasterLanguage?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
};

export type SiteDefinitionOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentRoots?: InputMaybe<ContentRootsModelOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  EditLocation?: InputMaybe<OrderBy>;
  Hosts?: InputMaybe<HostDefinitionModelOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SiteDefinitionOutput = {
  __typename?: 'SiteDefinitionOutput';
  autocomplete?: Maybe<SiteDefinitionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SiteDefinitionFacet>;
  items?: Maybe<Array<Maybe<SiteDefinition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SiteDefinitionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteDefinitionWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentRoots?: InputMaybe<ContentRootsModelWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  EditLocation?: InputMaybe<StringFilterInput>;
  Hosts?: InputMaybe<HostDefinitionModelWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type VariationContent = IContent & IData & {
  __typename?: 'VariationContent';
  AdditionalNodeParents?: Maybe<Array<Maybe<AdditionalParentNodeModel>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<Array<Maybe<AssociationsModel>>>;
  BundleParents?: Maybe<Array<Maybe<BundleParentModel>>>;
  CatalogId?: Maybe<Scalars['Int']['output']>;
  Categories?: Maybe<VariationContentCategories>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Code?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  DefaultImageUrl?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Inventory?: Maybe<InventoryInfoModel>;
  InventoryReference?: Maybe<ContentModelReference>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaClassId?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PackageParents?: Maybe<Array<Maybe<PackageParentModel>>>;
  ParentLink?: Maybe<ContentModelReference>;
  PricePerMarket?: Maybe<Array<Maybe<PricePerMarketModel>>>;
  PriceReference?: Maybe<ContentModelReference>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModel>;
  ProductParents?: Maybe<Array<Maybe<ProductParentModel>>>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoInformation?: Maybe<VariationContentSeoInformation>;
  SeoUri?: Maybe<Scalars['String']['output']>;
  ShippingDimensions?: Maybe<VariationContentShippingDimensions>;
  ShippingPackageId?: Maybe<Scalars['Int']['output']>;
  Shortcut?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  TaxCategoryId?: Maybe<Scalars['Int']['output']>;
  TotalItemsInAllWarehouses?: Maybe<Scalars['Int']['output']>;
  TrackInventory?: Maybe<Scalars['Bool']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _concreteType?: Maybe<Scalars['String']['output']>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VariationContentCodeArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContentDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContentNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VariationContentAutocomplete = {
  __typename?: 'VariationContentAutocomplete';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Associations?: Maybe<AssociationsModelAutocomplete>;
  BundleParents?: Maybe<BundleParentModelAutocomplete>;
  Categories?: Maybe<VariationContentCategoriesAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DefaultImageUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Inventory?: Maybe<InventoryInfoModelAutocomplete>;
  InventoryReference?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  PackageParents?: Maybe<PackageParentModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  PricePerMarket?: Maybe<PricePerMarketModelAutocomplete>;
  PriceReference?: Maybe<ContentModelReferenceAutocomplete>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelAutocomplete>;
  ProductParents?: Maybe<ProductParentModelAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoInformation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoUri?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ShippingDimensions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Shortcut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _concreteType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type VariationContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteDefaultImageUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteSeoInformationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteSeoUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteShippingDimensionsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteShortcutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type VariationContentAutocomplete_ConcreteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type VariationContentCategories = {
  __typename?: 'VariationContentCategories';
  ContentLink?: Maybe<ContentModelReference>;
};

export type VariationContentCategoriesAutocomplete = {
  __typename?: 'VariationContentCategoriesAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
};

export type VariationContentCategoriesFacet = {
  __typename?: 'VariationContentCategoriesFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
};

export type VariationContentCategoriesOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type VariationContentCategoriesWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type VariationContentFacet = {
  __typename?: 'VariationContentFacet';
  AdditionalNodeParents?: Maybe<AdditionalParentNodeModelFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Associations?: Maybe<AssociationsModelFacet>;
  BundleParents?: Maybe<BundleParentModelFacet>;
  CatalogId?: Maybe<Array<Maybe<NumberFacet>>>;
  Categories?: Maybe<VariationContentCategoriesFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Code?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  DefaultImageUrl?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Inventory?: Maybe<InventoryInfoModelFacet>;
  InventoryReference?: Maybe<ContentModelReferenceFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaClassId?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  PackageParents?: Maybe<PackageParentModelFacet>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PricePerMarket?: Maybe<PricePerMarketModelFacet>;
  PriceReference?: Maybe<ContentModelReferenceFacet>;
  PrimaryNodeParent?: Maybe<PrimaryNodeParentModelFacet>;
  ProductParents?: Maybe<ProductParentModelFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoInformation?: Maybe<VariationContentSeoInformationFacet>;
  SeoUri?: Maybe<Array<Maybe<StringFacet>>>;
  ShippingDimensions?: Maybe<VariationContentShippingDimensionsFacet>;
  ShippingPackageId?: Maybe<Array<Maybe<NumberFacet>>>;
  Shortcut?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TaxCategoryId?: Maybe<Array<Maybe<NumberFacet>>>;
  TotalItemsInAllWarehouses?: Maybe<Array<Maybe<NumberFacet>>>;
  TrackInventory?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  _concreteType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type VariationContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetCatalogIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VariationContentFacetCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VariationContentFacetDefaultImageUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetMetaClassIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VariationContentFacetSeoUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetShippingPackageIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentFacetShortcutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VariationContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type VariationContentFacetTaxCategoryIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentFacetTotalItemsInAllWarehousesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentFacetTrackInventoryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentFacet_ConcreteTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type VariationContentOrderByInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Associations?: InputMaybe<AssociationsModelOrderByInput>;
  BundleParents?: InputMaybe<BundleParentModelOrderByInput>;
  CatalogId?: InputMaybe<OrderBy>;
  Categories?: InputMaybe<VariationContentCategoriesOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Code?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  DefaultImageUrl?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Inventory?: InputMaybe<InventoryInfoModelOrderByInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaClassId?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  PackageParents?: InputMaybe<PackageParentModelOrderByInput>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PricePerMarket?: InputMaybe<PricePerMarketModelOrderByInput>;
  PriceReference?: InputMaybe<ContentModelReferenceOrderByInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelOrderByInput>;
  ProductParents?: InputMaybe<ProductParentModelOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoInformation?: InputMaybe<VariationContentSeoInformationOrderByInput>;
  SeoUri?: InputMaybe<OrderBy>;
  ShippingDimensions?: InputMaybe<VariationContentShippingDimensionsOrderByInput>;
  ShippingPackageId?: InputMaybe<OrderBy>;
  Shortcut?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TaxCategoryId?: InputMaybe<OrderBy>;
  TotalItemsInAllWarehouses?: InputMaybe<OrderBy>;
  TrackInventory?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _concreteType?: InputMaybe<OrderBy>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VariationContentOutput = {
  __typename?: 'VariationContentOutput';
  autocomplete?: Maybe<VariationContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VariationContentFacet>;
  items?: Maybe<Array<Maybe<VariationContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VariationContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VariationContentSeoInformation = {
  __typename?: 'VariationContentSeoInformation';
  Description?: Maybe<Scalars['String']['output']>;
  Keywords?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};


export type VariationContentSeoInformationDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContentSeoInformationKeywordsArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VariationContentSeoInformationTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type VariationContentSeoInformationFacet = {
  __typename?: 'VariationContentSeoInformationFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Keywords?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type VariationContentSeoInformationFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentSeoInformationFacetKeywordsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type VariationContentSeoInformationFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type VariationContentSeoInformationOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Keywords?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type VariationContentSeoInformationWhereInput = {
  Description?: InputMaybe<SearchableStringFilterInput>;
  Keywords?: InputMaybe<SearchableStringFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
};

export type VariationContentShippingDimensions = {
  __typename?: 'VariationContentShippingDimensions';
  Height?: Maybe<Scalars['Float']['output']>;
  Length?: Maybe<Scalars['Float']['output']>;
  Width?: Maybe<Scalars['Float']['output']>;
};

export type VariationContentShippingDimensionsFacet = {
  __typename?: 'VariationContentShippingDimensionsFacet';
  Height?: Maybe<Array<Maybe<NumberFacet>>>;
  Length?: Maybe<Array<Maybe<NumberFacet>>>;
  Width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type VariationContentShippingDimensionsFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentShippingDimensionsFacetLengthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type VariationContentShippingDimensionsFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type VariationContentShippingDimensionsOrderByInput = {
  Height?: InputMaybe<OrderBy>;
  Length?: InputMaybe<OrderBy>;
  Width?: InputMaybe<OrderBy>;
};

export type VariationContentShippingDimensionsWhereInput = {
  Height?: InputMaybe<FloatFilterInput>;
  Length?: InputMaybe<FloatFilterInput>;
  Width?: InputMaybe<FloatFilterInput>;
};

export type VariationContentWhereInput = {
  AdditionalNodeParents?: InputMaybe<AdditionalParentNodeModelWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Associations?: InputMaybe<AssociationsModelWhereInput>;
  BundleParents?: InputMaybe<BundleParentModelWhereInput>;
  CatalogId?: InputMaybe<IntFilterInput>;
  Categories?: InputMaybe<VariationContentCategoriesWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Code?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  DefaultImageUrl?: InputMaybe<StringFilterInput>;
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Inventory?: InputMaybe<InventoryInfoModelWhereInput>;
  InventoryReference?: InputMaybe<ContentModelReferenceWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaClassId?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  PackageParents?: InputMaybe<PackageParentModelWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PricePerMarket?: InputMaybe<PricePerMarketModelWhereInput>;
  PriceReference?: InputMaybe<ContentModelReferenceWhereInput>;
  PrimaryNodeParent?: InputMaybe<PrimaryNodeParentModelWhereInput>;
  ProductParents?: InputMaybe<ProductParentModelWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoInformation?: InputMaybe<VariationContentSeoInformationWhereInput>;
  SeoUri?: InputMaybe<StringFilterInput>;
  ShippingDimensions?: InputMaybe<VariationContentShippingDimensionsWhereInput>;
  ShippingPackageId?: InputMaybe<IntFilterInput>;
  Shortcut?: InputMaybe<StringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TaxCategoryId?: InputMaybe<IntFilterInput>;
  TotalItemsInAllWarehouses?: InputMaybe<IntFilterInput>;
  TrackInventory?: InputMaybe<BoolFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<VariationContentWhereInput>>>;
  _concreteType?: InputMaybe<StringFilterInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VariationContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VariationContentWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type ProductCatalogQueryQueryVariables = Exact<{
  languages?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type ProductCatalogQueryQuery = { __typename?: 'Query', CatalogContent?: { __typename?: 'CatalogContentOutput', total?: number | null, items?: Array<{ __typename?: 'CatalogContent', Name?: string | null, _children?: { __typename?: 'QueryRef', GenericNode?: { __typename?: 'GenericNodeOutput', items?: Array<(
            { __typename?: 'GenericNode' }
            & { ' $fragmentRefs'?: { 'GenericNodeFragmentFragment': GenericNodeFragmentFragment } }
          ) | null> | null } | null } | null } | null> | null } | null };

export type GenericNodeFragmentFragment = { __typename?: 'GenericNode', Code?: string | null, DisplayName?: string | null, Description?: string | null, DefaultImageUrl?: string | null, RouteSegment?: string | null, Url?: string | null, SeoUri?: string | null, RelativePath?: string | null } & { ' $fragmentName'?: 'GenericNodeFragmentFragment' };

export type GenericProductFragmentFragment = { __typename?: 'GenericProduct', Name?: string | null, Code?: string | null, DisplayName?: string | null, RelativePath?: string | null, RouteSegment?: string | null, LongDescription?: string | null, ProductTeaser?: string | null, Sizing?: string | null, TotalItemsOfAllVariantsInAllWarehouses?: number | null, DefaultImageUrl?: string | null, Brand?: string | null, ParentCategories?: Array<string | null> | null, LowestPriceOfVariationPerMarket?: Array<{ __typename?: 'LowestPriceOfVariationPerMarketModel', MarketName?: string | null, Price?: number | null } | null> | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, GuidValue?: string | null } | null } & { ' $fragmentName'?: 'GenericProductFragmentFragment' };

export type ProductCategoryQueryQueryVariables = Exact<{
  languages?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  segment?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductCategoryQueryQuery = { __typename?: 'Query', GenericNode?: { __typename?: 'GenericNodeOutput', total?: number | null, items?: Array<(
      { __typename?: 'GenericNode', _children?: { __typename?: 'QueryRef', GenericNode?: { __typename?: 'GenericNodeOutput', total?: number | null, items?: Array<(
            { __typename?: 'GenericNode' }
            & { ' $fragmentRefs'?: { 'GenericNodeFragmentFragment': GenericNodeFragmentFragment } }
          ) | null> | null } | null } | null }
      & { ' $fragmentRefs'?: { 'GenericNodeFragmentFragment': GenericNodeFragmentFragment } }
    ) | null> | null } | null };

export type ProductQueryQueryVariables = Exact<{
  languages?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductQueryQuery = { __typename?: 'Query', GenericProduct?: { __typename?: 'GenericProductOutput', items?: Array<(
      { __typename?: 'GenericProduct' }
      & { ' $fragmentRefs'?: { 'GenericProductFragmentFragment': GenericProductFragmentFragment } }
    ) | null> | null } | null };

export type GetProductQueryQueryVariables = Exact<{
  languages?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  segment?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProductQueryQuery = { __typename?: 'Query', GenericProduct?: { __typename?: 'GenericProductOutput', items?: Array<(
      { __typename?: 'GenericProduct' }
      & { ' $fragmentRefs'?: { 'GenericProductFragmentFragment': GenericProductFragmentFragment } }
    ) | null> | null } | null };

export type ProductDetailQueryVariables = Exact<{
  locale?: InputMaybe<Locales>;
  code: Scalars['String']['input'];
}>;


export type ProductDetailQuery = { __typename?: 'Query', GenericProduct?: { __typename?: 'GenericProductOutput', items?: Array<{ __typename?: 'GenericProduct', Name?: string | null, Code?: string | null, DefaultImageUrl?: string | null, Brand?: string | null, LongDescription?: string | null, ProductTeaser?: string | null, Sizing?: string | null, ContentLink?: { __typename?: 'ContentModelReference', Id?: number | null, GuidValue?: string | null } | null } | null> | null } | null };

export type VariantQueryQueryVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type VariantQueryQuery = { __typename?: 'Query', GenericVariant?: { __typename?: 'GenericVariantOutput', items?: Array<{ __typename?: 'GenericVariant', Color?: string | null, Size?: string | null, Code?: string | null, DisplayName?: string | null, ProductParents?: Array<{ __typename?: 'ProductParentModel', GuidValue?: string | null } | null> | null, Language?: { __typename?: 'ContentLanguageModel', Name?: string | null } | null } | null> | null } | null };

export const GenericNodeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericNodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"SeoUri"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<GenericNodeFragmentFragment, unknown>;
export const GenericProductFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ProductTeaser"}},{"kind":"Field","name":{"kind":"Name","value":"Sizing"}},{"kind":"Field","name":{"kind":"Name","value":"TotalItemsOfAllVariantsInAllWarehouses"}},{"kind":"Field","name":{"kind":"Name","value":"LowestPriceOfVariationPerMarket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MarketName"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"Brand"}},{"kind":"Field","name":{"kind":"Name","value":"ParentCategories"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"GuidValue"}}]}}]}}]} as unknown as DocumentNode<GenericProductFragmentFragment, unknown>;
export const ProductCatalogQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductCatalogQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CatalogContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"_children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenericNodeFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericNodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"SeoUri"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ProductCatalogQueryQuery, ProductCatalogQueryQueryVariables>;
export const ProductCategoryQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductCategoryQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"segment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericNode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RouteSegment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"segment"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenericNodeFragment"}},{"kind":"Field","name":{"kind":"Name","value":"_children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericNode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenericNodeFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericNodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"SeoUri"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ProductCategoryQueryQuery, ProductCategoryQueryQueryVariables>;
export const ProductQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"market"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"USA","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ParentCategories"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"LowestPriceOfVariationPerMarket"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"MarketName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"market"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenericProductFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ProductTeaser"}},{"kind":"Field","name":{"kind":"Name","value":"Sizing"}},{"kind":"Field","name":{"kind":"Name","value":"TotalItemsOfAllVariantsInAllWarehouses"}},{"kind":"Field","name":{"kind":"Name","value":"LowestPriceOfVariationPerMarket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MarketName"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"Brand"}},{"kind":"Field","name":{"kind":"Name","value":"ParentCategories"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"GuidValue"}}]}}]}}]} as unknown as DocumentNode<ProductQueryQuery, ProductQueryQueryVariables>;
export const GetProductQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languages"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"segment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languages"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RouteSegment"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"segment"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GenericProductFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ProductTeaser"}},{"kind":"Field","name":{"kind":"Name","value":"Sizing"}},{"kind":"Field","name":{"kind":"Name","value":"TotalItemsOfAllVariantsInAllWarehouses"}},{"kind":"Field","name":{"kind":"Name","value":"LowestPriceOfVariationPerMarket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MarketName"}},{"kind":"Field","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"Brand"}},{"kind":"Field","name":{"kind":"Name","value":"ParentCategories"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"GuidValue"}}]}}]}}]} as unknown as DocumentNode<GetProductQueryQuery, GetProductQueryQueryVariables>;
export const ProductDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}},"defaultValue":{"kind":"EnumValue","value":"en"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DefaultImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"Brand"}},{"kind":"Field","name":{"kind":"Name","value":"LongDescription"}},{"kind":"Field","name":{"kind":"Name","value":"ProductTeaser"}},{"kind":"Field","name":{"kind":"Name","value":"Sizing"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Id"}},{"kind":"Field","name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductDetailQuery, ProductDetailQueryVariables>;
export const VariantQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VariantQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GenericVariant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ProductParents"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"productId"}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"en","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Color"}},{"kind":"Field","name":{"kind":"Name","value":"Size"}},{"kind":"Field","name":{"kind":"Name","value":"Code"}},{"kind":"Field","name":{"kind":"Name","value":"DisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"ProductParents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VariantQueryQuery, VariantQueryQueryVariables>;