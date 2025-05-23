declare module "astro:actions" {
	type Actions = typeof import("/Users/rensoconese/Documents/shinyoctopus/src/actions")["server"];

	export const actions: Actions;
}