import moment from "moment"

const dateparse = (val, format) => moment(val).format(format)

export {
  dateparse
}