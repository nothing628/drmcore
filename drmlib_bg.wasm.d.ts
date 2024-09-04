/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function create_arr_result(): number;
export function len_arr_result(a: number): number;
export function read_arr_result(a: number, b: number): number;
export function destroy_arr_result(a: number): void;
export function add(a: number): number;
export function add_array(a: number, b: number): number;
export function ret_arr(): number;
export function get_section_webp(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function get_section_jpeg(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function create_watermarktask(): number;
export function set_position_watermark(a: number, b: number, c: number, d: number, e: number): void;
export function set_key(a: number, b: number, c: number, d: number): void;
export function destroy_watermarktask(a: number): void;
export function process_watermark(a: number, b: number): void;
export function set_target_webp(a: number, b: number, c: number, d: number): void;
export function set_target_jpeg(a: number, b: number, c: number, d: number): void;
export function set_watermark_webp(a: number, b: number, c: number, d: number): void;
export function set_watermark_jpeg(a: number, b: number, c: number, d: number): void;
export function get_old_section_jpeg(a: number, b: number): void;
export function get_old_section_webp(a: number, b: number): void;
export function get_output_jpeg(a: number, b: number): void;
export function get_output_webp(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
