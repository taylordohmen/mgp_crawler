import {
	Editor,
	MarkdownView,
	Notice,
	Plugin,
	requestUrl
} from 'obsidian';
import * as cheerio from 'cheerio';

const PEOPLE_DIR = 'People';
const MGP_BASE_URL = 'https://www.genealogy.math.ndsu.nodak.edu/'; 

export default class MgpFetchPlugin extends Plugin {
	async onload() {}

	async onunload() {}
}
