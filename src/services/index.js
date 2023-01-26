import { gql } from "@apollo/client";

export const getAllMessages = gql`
 {
 messages(orderBy: title_ASC, last: 200) {
  coverImg {
    url
  }
  messageSlug
  format
  title
  preacher
  description
}
 }
 `;

export const getRecentMessages = gql`
 {
  messages(where: {recent: true}, last: 10, orderBy: publishedAt_DESC) {
    coverImg {
      url
    }
    description
    messageSlug
    preacher
    title
    format
  }
 }
`
export const getCategories = gql`
  {
    categories {
      name
      categorySlug
      categoryCover {
        url
      }
    }
  }
 `;
export const getCategoryEvangelisation = gql`
  {
    messages(where: {categories_some: {categorySlug_contains: "evangelisation"}}, last: 200) {
      messageSlug
      preacher
      title
      description
      format
      coverImg {
        url
      }
    }
  }
 
 `;

export const getCategoryVieChretienne = gql`
 {
   messages(where: {categories_some: {categorySlug_contains: "vie-chretienne"}}, last: 200) {
     messageSlug
     preacher
     title
     description
     format
     coverImg {
       url
     }
   }
 }

`;

export const getCategoryPriere = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "priere"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getCategoryFoi = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "foi"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getCategorySaintEsprit = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "saint-esprit"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getCategoryProsperiteEtFinance = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "prosperite-et-finance"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getCategoryGuerisonEtSante = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "guerison-et-sante"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;
export const getCategoryGainDames = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "gain-dames"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getCategoryCroissanceDeglise = gql`
{
  messages(where: {categories_some: {categorySlug_contains: "croissance-deglise"}}, last: 200) {
    messageSlug
    preacher
    title
    description
    format
    coverImg {
      url
    }
  }
}

`;

export const getMainMessage = gql`
  {
    messages(where: {recent: false}, last: 200, orderBy: title_ASC) {
      coverImg {
        url
      }
      description
      format
      messageSlug
      preacher
      title
    }
  }
`








