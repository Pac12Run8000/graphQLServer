const { BoxerList } = require("./BoxerData")

const resolvers = {
    Query: {
        boxers() {
            return BoxerList;
        },
    },
};

module.exports = { resolvers };