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
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_target_webp(ptr: number, byts_ptr: number, byts_len: number): number;
/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_target_jpeg(ptr: number, byts_ptr: number, byts_len: number): number;
/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_watermark_webp(ptr: number, byts_ptr: number, byts_len: number): number;
/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_watermark_jpeg(ptr: number, byts_ptr: number, byts_len: number): number;
/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_key(ptr: number, byts_ptr: number, byts_len: number): number;
/**
* @param {number} ptr
*/
export function destroy_watermarktask(ptr: number): void;
/**
* @param {number} ptr
* @returns {number}
*/
export function process_watermark(ptr: number): number;
/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_old_section_webp(ptr: number, target: number): number;
/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_old_section_jpeg(ptr: number, target: number): number;
/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_output_webp(ptr: number, target: number): number;
/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_output_jpeg(ptr: number, target: number): number;
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
