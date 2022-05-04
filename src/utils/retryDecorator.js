import * as constants from '../app/constants';

export default async function decorator(
    fn,
    count = constants.DEFAULT_API_RETRY_COUNT,
    delayMilliseconds = constants.DEFAULT_API_RETRY_DELAY_MILLISECONDS
) {
    let err;
    for (let i = 0; i < count; ++i) {
        try {
            return await fn();
        } catch (e) {
            err = e;
            await new Promise(resolve => setTimeout(() => resolve(), delayMilliseconds))
        }
    }
    throw err;
}
