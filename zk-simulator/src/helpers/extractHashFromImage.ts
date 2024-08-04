export function extractHashFromImage(
    imageData: Uint8ClampedArray,
    indices: number[],
    hashLength: number
  ): string {
    let extractedBits = "";
  
    for (let i = 0; i < indices.length; i++) {
      const pixelIndex = indices[i];
      const currentByte = imageData[pixelIndex];
      const lsb = currentByte & 1;
      extractedBits += lsb.toString();
    }
  
    const hashBytes: any[] = [];
    for (let i = 0; i < hashLength * 8; i += 8) {
      const byte = parseInt(extractedBits.slice(i, i + 8), 2);
      hashBytes.push(byte.toString(16).padStart(2, "0"));
    }
  
    return hashBytes.join("");
  }