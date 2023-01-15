
export const BLOCKED_WORDS = [
    'dog'
];
export const REGEX_WORDS = [



    /^(?!.*\bpas\b)(.*)(t.*(t|tu|ai|es)[^a-zA-Z]?(ai|es)?(nul|nul.*|nu.*l|n.*ul|nule.*))(.*)/gi

    //^(?!.*\bpas\b)(.*)(t.*(u|ai|es)[^a-zA-Z]?(ai|es)?(nul|nul.*|nu.*l|n.*ul|nule.*))(.*)/gi


    //^(?!.*\bpas\b)((t'es|ai|u|est|es|t|té)\s*[n.*u.*l.*(l.*|e.*)])/gi,
    //^(?!.*\bpas\b)((t'es|ai|u|est|es|t|té)\s*[r.*i.*n.*c.*(é.*|e.*|er.*)])/gi


    //^(?!.*\bpas\b)(.*)(t.*(u|ai|es)?[^a-zA-Z]?(ai|es)?n.*u.*l.*)(.*)/gi

    //(.*)(t.*(u|ai|es)?[^a-zA-Z]?(ai|es)?n.*u.*l.*)(.*)/gi,
    //(.*)[\s\W]*(t(u|ai)?[^a-zA-Z]?(ai|es)?[^a-zA-Z]?nul)[\s\W]*(.*)/gi

];


