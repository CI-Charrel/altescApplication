import React from 'react';
import AppRoute from './src/routes'
import { Provider } from "react-redux";
import configureStore from "./src/core/store/configurationStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const App = () => {

    const store = configureStore();
    const persistor = persistStore(store);

    return (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
        </PersistGate>
    </Provider>);
} 

export default App;