import { franc } from 'franc'
import langs from 'langs'

const args = process.argv[2];

const langCode = franc(args);

const language = langs.where("3", langCode);

console.log(language.name)