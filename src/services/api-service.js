// Default sortBy parameter is publishedAt, so I leave it like it is
// To choose country on the UI will be a nice option, but it is out of the task scope

export const apiService = async (
  country = 'us',
  category,
  page = 1,
  pageSize = 11
) => {
  const url = new URL('https://newsapi.org/v2/top-headlines');

  const params = {
    country,
    page,
    pageSize,
    apiKey: '621b38767e3d4e1faee5c8891dbbb406'
  };
  // a3ca4bb82ae843c9ae17dd61bd271718
  // 621b38767e3d4e1faee5c8891dbbb406

  if (category) {
    params.category = category;
  }

  url.search = new URLSearchParams(params).toString();
  const request = await fetch(url);
  const data = await request.json();

  return data;
};
