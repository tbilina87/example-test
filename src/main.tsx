import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { App } from './App';

const element = document.getElementById('container');
const root = element ? ReactDOMClient.createRoot(element) : null;
root?.render(<App />);
