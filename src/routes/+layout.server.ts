import body3 from '$lib/assets/json/output_3_1765886413856.json';
import body4 from '$lib/assets/json/output_4_1765886368050.json';
import body5 from '$lib/assets/json/output_5_1765886309458.json';
import body6 from '$lib/assets/json/output_6_1765886199701.json';
import body7 from '$lib/assets/json/output_7_1765886573411.json';
import title3 from '$lib/assets/json/title_3_1765886813745.json';
import title4 from '$lib/assets/json/title_4_1765886799210.json';
import title5 from '$lib/assets/json/title_5_1765886766831.json';
import title6 from '$lib/assets/json/title_6_1765886758141.json';
import title7 from '$lib/assets/json/title_7_1765886729756.json';
export const prerender = true;
import type { LayoutServerLoad } from './$types';
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array: string[]) => {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
};

export const load: LayoutServerLoad = async ({ params }) => {
	let bodies = [...body3, ...body4, ...body5, ...body6, ...body7];
	let titles = [...title3, ...title4, ...title5, ...title6, ...title7];
	shuffle(bodies);
	shuffle(titles);

	let posts = [];
	for (let x = 0; x < 100; x++) {
		posts.push({
			title: titles[x],
			body: bodies[x]
		});
	}
	return { posts };
};
