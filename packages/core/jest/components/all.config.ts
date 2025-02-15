export default {
    runner: "jest-runner",
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    displayName: "test:unit",
    rootDir: "../..",
    coverageDirectory: "<rootDir>/coverage",
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "<rootDir>/src/**/*.tsx",
    ],
    coveragePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/build/",
        "<rootDir>/coverage/",
        "<rootDir>/dist/",
    ],
    coverageThreshold: {
        "global": {
            "branches": 70,
            "functions": 70,
            "lines": 70,
            "statements": -10
        },
        "./src": {
            "branches": 70,
            "functions": 70,
            "lines": 70,
            "statements": -10

        }
    },
    modulePaths: [
        "<rootDir>/src",
        "<rootDir>/node_modules"
    ],
    moduleFileExtensions: ["js", "json", "less", "ts", "tsx"],
    setupFiles: ["<rootDir>/jest/scripts/setupFiles.ts"],
    setupFilesAfterEnv: [
    ],
    moduleNameMapper: {
        "\\.(less|m.less)$": "<rootDir>/jest/scripts/mocks/stylesMock.ts",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js"
    },
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/build/",
        "<rootDir>/coverage/",
        "<rootDir>/dist/",
    ],
}
