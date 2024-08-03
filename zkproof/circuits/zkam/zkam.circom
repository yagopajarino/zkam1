pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "circomlib/circuits/comparators.circom";

template ZKam(size) {
    
    signal input imageWithHash[size];
    signal input private hashIndexs[size];

    var originalHash[256];
    var originalImage[size-256];
    signal output hashOutput;

    for (var i = 0; i < size; i++) {
        if (hashIndexs[i] > 0) {
            originalHash[i] <== imageWithHash[i];
        } else {
            originalImage[i] <== imageWithHash[i];
        }
    }    

    component hasher = Poseidon(1);
    hasher.inputs[0] <== originalImage;
    hashOutput <== hasher.out;

    hashOutput <== originalHash;
}

// unsolved is a public input signal. It is the unsolved sudoku
component main {public [image, hashIndexs]} = ZKam(300 * 300);