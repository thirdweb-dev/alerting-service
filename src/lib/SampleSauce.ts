import { logger } from "../logger";

/*
 * This is an example class of how to use the logger
 * Remove if not necessary!
 */
export default class SampleSauce {
	private logger;

	constructor() {
		this.logger = logger.registerLogger(SampleSauce.name);
	}

	name() {
		this.logger.info("Someone wants to know my name");
		return SampleSauce.name;
	}
}
