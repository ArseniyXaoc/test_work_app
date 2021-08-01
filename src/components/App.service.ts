import FetchingData from './App.memory'
import { CONNECTION_CONFIG } from '../CONSTANTS'
function getData() {
    const { url, authentication_token, context, context_id, theme_id, widget_id } = CONNECTION_CONFIG;
    const fetchingData = new FetchingData(url, authentication_token, context, context_id, theme_id, widget_id);
}

export default getData;