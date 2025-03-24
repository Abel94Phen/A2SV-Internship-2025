"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function DisplayAction() {
    console.log("Main Menu");
    console.log("1. See All Tasks");
    console.log("2. Add a new Task");
    console.log("3. Update a task");
    console.log("4. Delete a Task");
    console.log("5. Exit");
}
function GetChoice() {
    return new Promise((resolve) => {
        rl.question('Enter your choice: ', (answer) => {
            resolve(parseInt(answer));
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            DisplayAction();
            const choice = yield GetChoice();
            switch (choice) {
                case 1:
                    console.log("See All Tasks");
                    break;
                case 2:
                    console.log("Add a new Task");
                    break;
                case 3:
                    console.log("Update a task");
                    break;
                case 4:
                    console.log("Delete a Task");
                    break;
                case 5:
                    console.log("Exit");
                    rl.close();
                    return;
                default:
                    console.log("Invalid choice, please try again.");
            }
        }
    });
}
main();
