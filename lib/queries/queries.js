// Query to get Media by page from Anilist Graphql API
export const GET_MEDIA_BY_PAGE = `query ($page: Int, $perPage: Int) { 
    Page (page: $page, perPage : $perPage) {
        pageInfo {
            perPage
            currentPage
        }
        media {
            id
            title {
                userPreferred  
              }
            description(asHtml:true)
            coverImage {
                extraLarge
                large
                medium
            }
        }
    }
}`;
