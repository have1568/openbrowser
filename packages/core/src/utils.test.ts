import { describe, expect, test } from 'bun:test';
import { extractUrls } from './utils.js';

describe('extractUrls', () => {
	test('keeps trailing colons that belong to the address', () => {
		expect(extractUrls('Open https://example.eu/ords/f?p=CEN:105::RESET:::: now')).toEqual([
			'https://example.eu/ords/f?p=CEN:105::RESET::::',
		]);
	});

	test('drops sentence punctuation after an address', () => {
		expect(extractUrls('See (https://example.eu/a), then https://example.eu/b.')).toEqual([
			'https://example.eu/a',
			'https://example.eu/b',
		]);
	});
});
