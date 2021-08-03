import FetchingData from "./App.memory";
import { CONNECTION_CONFIG } from "../CONSTANTS";
async function getData(page?: string, sort?: string) {
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
    console.log(data);
    
    const product = fetchingData.getProduct(data);
    const reviews: Array<{}> = fetchingData.getReview(data);
    return {product, reviews};
  } catch (error) {
      throw new Error(error);
  }
}

export default getData;
