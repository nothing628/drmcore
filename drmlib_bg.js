let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @returns {number}
*/
export function create_arr_result() {
    const ret = wasm.create_arr_result();
    return ret >>> 0;
}

/**
* @param {number} ptr
* @returns {number}
*/
export function len_arr_result(ptr) {
    const ret = wasm.len_arr_result(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} len
* @returns {number}
*/
export function read_arr_result(ptr, len) {
    const ret = wasm.read_arr_result(ptr, len);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
export function destroy_arr_result(ptr) {
    wasm.destroy_arr_result(ptr);
}

/**
* @returns {number}
*/
export function create_watermarktask() {
    const ret = wasm.create_watermarktask();
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} origin_x
* @param {number} origin_y
*/
export function set_position_watermark(ptr, x, y, origin_x, origin_y) {
    wasm.set_position_watermark(ptr, x, y, origin_x, origin_y);
}

/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_target_webp(ptr, byts_ptr, byts_len) {
    const ret = wasm.set_target_webp(ptr, byts_ptr, byts_len);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_target_jpeg(ptr, byts_ptr, byts_len) {
    const ret = wasm.set_target_jpeg(ptr, byts_ptr, byts_len);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_watermark_webp(ptr, byts_ptr, byts_len) {
    const ret = wasm.set_watermark_webp(ptr, byts_ptr, byts_len);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_watermark_jpeg(ptr, byts_ptr, byts_len) {
    const ret = wasm.set_watermark_jpeg(ptr, byts_ptr, byts_len);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} byts_ptr
* @param {number} byts_len
* @returns {number}
*/
export function set_key(ptr, byts_ptr, byts_len) {
    const ret = wasm.set_key(ptr, byts_ptr, byts_len);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
export function destroy_watermarktask(ptr) {
    wasm.destroy_watermarktask(ptr);
}

/**
* @param {number} ptr
* @returns {number}
*/
export function process_watermark(ptr) {
    const ret = wasm.process_watermark(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_old_section_webp(ptr, target) {
    const ret = wasm.get_old_section_webp(ptr, target);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_old_section_jpeg(ptr, target) {
    const ret = wasm.get_old_section_jpeg(ptr, target);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_output_webp(ptr, target) {
    const ret = wasm.get_output_webp(ptr, target);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} target
* @returns {number}
*/
export function get_output_jpeg(ptr, target) {
    const ret = wasm.get_output_jpeg(ptr, target);
    return ret >>> 0;
}

/**
* @param {number} byts_ptr
* @param {number} byts_len
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
* @returns {number}
*/
export function get_section_webp(byts_ptr, byts_len, x, y, w, h) {
    const ret = wasm.get_section_webp(byts_ptr, byts_len, x, y, w, h);
    return ret >>> 0;
}

/**
* @param {number} byts_ptr
* @param {number} byts_len
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
* @returns {number}
*/
export function get_section_jpeg(byts_ptr, byts_len, x, y, w, h) {
    const ret = wasm.get_section_jpeg(byts_ptr, byts_len, x, y, w, h);
    return ret >>> 0;
}

