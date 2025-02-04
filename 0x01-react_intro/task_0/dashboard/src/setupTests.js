// Add TextEncoder/TextDecoder polyfill at the VERY TOP
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Then import other dependencies
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

// Enzyme configuration
configure({ adapter: new Adapter() });
