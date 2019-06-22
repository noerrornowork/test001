import Vuex from 'vuex'

import state from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
	return new Vuex.Store({
		strict: isDev,
		state,
		actions,
		mutations,
		getters
	})
}