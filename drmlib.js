let wasm;

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

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('drmlib_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
