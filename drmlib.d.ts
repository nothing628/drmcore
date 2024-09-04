/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function create_arr_result(): number;
/**
* @param {number} ptr
* @returns {number}
*/
export function len_arr_result(ptr: number): number;
/**
* @param {number} ptr
* @param {number} len
* @returns {number}
*/
export function read_arr_result(ptr: number, len: number): number;
/**
* @param {number} ptr
*/
export function destroy_arr_result(ptr: number): void;
/**
* @param {number} byts_ptr
* @param {number} byts_len
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
* @returns {number}
*/
export function get_section_webp(byts_ptr: number, byts_len: number, x: number, y: number, w: number, h: number): number;
/**
* @param {number} byts_ptr
* @param {number} byts_len
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
* @returns {number}
*/
export function get_section_jpeg(byts_ptr: number, byts_len: number, x: number, y: number, w: number, h: number): number;
/**
* @returns {number}
*/
export function create_watermarktask(): number;
/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} origin_x
* @param {number} origin_y
*/
export function set_position_watermark(ptr: number, x: number, y: number, origin_x: number, origin_y: number): void;
/**
* @param {number} ptr
* @param {Uint8Array} key
*/
export function set_key(ptr: number, key: Uint8Array): void;
/**
* @param {number} ptr
*/
export function destroy_watermarktask(ptr: number): void;
/**
* @param {number} ptr
*/
export function process_watermark(ptr: number): void;
/**
* @param {number} ptr
* @param {Uint8Array} inp_bytes
*/
export function set_target_webp(ptr: number, inp_bytes: Uint8Array): void;
/**
* @param {number} ptr
* @param {Uint8Array} inp_bytes
*/
export function set_target_jpeg(ptr: number, inp_bytes: Uint8Array): void;
/**
* @param {number} ptr
* @param {Uint8Array} inp_bytes
*/
export function set_watermark_webp(ptr: number, inp_bytes: Uint8Array): void;
/**
* @param {number} ptr
* @param {Uint8Array} inp_bytes
*/
export function set_watermark_jpeg(ptr: number, inp_bytes: Uint8Array): void;
/**
* @param {number} ptr
* @returns {any}
*/
export function get_old_section_jpeg(ptr: number): any;
/**
* @param {number} ptr
* @returns {any}
*/
export function get_old_section_webp(ptr: number): any;
/**
* @param {number} ptr
* @returns {any}
*/
export function get_output_jpeg(ptr: number): any;
/**
* @param {number} ptr
* @returns {any}
*/
export function get_output_webp(ptr: number): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly create_arr_result: () => number;
  readonly len_arr_result: (a: number) => number;
  readonly read_arr_result: (a: number, b: number) => number;
  readonly destroy_arr_result: (a: number) => void;
  readonly add: (a: number) => number;
  readonly add_array: (a: number, b: number) => number;
  readonly ret_arr: () => number;
  readonly get_section_webp: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly get_section_jpeg: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly create_watermarktask: () => number;
  readonly set_position_watermark: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly set_key: (a: number, b: number, c: number, d: number) => void;
  readonly destroy_watermarktask: (a: number) => void;
  readonly process_watermark: (a: number, b: number) => void;
  readonly set_target_webp: (a: number, b: number, c: number, d: number) => void;
  readonly set_target_jpeg: (a: number, b: number, c: number, d: number) => void;
  readonly set_watermark_webp: (a: number, b: number, c: number, d: number) => void;
  readonly set_watermark_jpeg: (a: number, b: number, c: number, d: number) => void;
  readonly get_old_section_jpeg: (a: number, b: number) => void;
  readonly get_old_section_webp: (a: number, b: number) => void;
  readonly get_output_jpeg: (a: number, b: number) => void;
  readonly get_output_webp: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
