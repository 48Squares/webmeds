import {render} from 'react-dom';
import App from './app';

if (document.getElementById('app')) {
    render(
        <App/>,
        document.getElementById('app')
    )
}
