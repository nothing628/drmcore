import * as wasm from "./drmlib_bg.wasm";
import { __wbg_set_wasm } from "./drmlib_bg.js";
__wbg_set_wasm(wasm);
export * from "./drmlib_bg.js";
