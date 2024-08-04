import * as CryptoJS from "crypto-js";

export function generateHash(
    imageData: Uint8ClampedArray,
    excludedIndices: number[]
  ): string {
    const dataToHash: any[] = [];
  
    for (let i = 0; i < imageData.length; i++) {
      if (!excludedIndices.includes(i)) {
        dataToHash.push(imageData[i]);
      }
    }
  
    const dataString = dataToHash.join(",");
    return CryptoJS.SHA256(dataString).toString(CryptoJS.enc.Hex);
  }