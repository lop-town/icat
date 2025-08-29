/**
 * Default file icon associations
 * Keys are icon file basenames
 */
type FileIcons = Record<string, {
    languageIds?: Array<string>;
    fileExtensions?: Array<string>;
    fileNames?: Array<string>;
}>;
declare const fileIcons: FileIcons;
declare const languageIds: {};
declare const fileExtensions: {};
declare const fileNames: {};

export { fileExtensions, fileIcons, fileNames, languageIds };
