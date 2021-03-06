import cmc from './cmc'
import gen from './general'
import meme from './meme'

const commandObj = { cmc, gen, meme }
const PREFIX = '.'

const preFixedCommandObj = Object.keys(
	commandObj
).reduce((prevValue, currValue) => {
	return { ...prevValue, [`${PREFIX}${currValue}`]: commandObj[currValue] }
}, {})

const commandHandler = async command => {
	const [commandName, option, ...rest] = command.split(' ')
	if (!preFixedCommandObj[commandName]) return null

	const result = preFixedCommandObj[commandName][option]
	return result(rest)
}

export default commandHandler
