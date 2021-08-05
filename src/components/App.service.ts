import FetchingData from "./App.memory";
import { CONNECTION_CONFIG } from "../CONSTANTS";
async function getData(page?: number | undefined, sort?: string) {
  try {
    const {
      url,
      authentication_token,
      context,
      context_id,
      theme_id,
      widget_id,
    } = CONNECTION_CONFIG;

    const fetchingData = new FetchingData(
      url,
      authentication_token,
      context,
      context_id,
      theme_id,
      widget_id
    );
    const data = await fetchingData.getData(page, sort);
    const product = fetchingData.getProduct(data);
    const reviews: Array<{}> = fetchingData.getReview(data);
    const pages: {
      "current_page": number,
      "total_pages": number,
      "per_page": number
    } = fetchingData.getPages(data);
    return { product, reviews, pages };
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
