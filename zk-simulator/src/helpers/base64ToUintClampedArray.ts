export function base64ToUint8ClampedArray(base64: string): Uint8ClampedArray {
    const binaryString = Buffer.from(base64, 'base64').toString('binary');

    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    return new Uint8ClampedArray(bytes.buffer);
}