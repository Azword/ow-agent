import { OWAgent } from './classes/agent.class';
import { Config } from './classes/config.class';

const config = new Config();
config.load();
const owAgent = new OWAgent(config);
owAgent.init();
