import "@testing-library/jest-dom";

// Add TextEncoder polyfill
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
// Enzyme configuration

configure({ adapter: new Adapter() });
