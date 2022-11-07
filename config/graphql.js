
// const graphql = require('graphql')
// const joinMonster = require('join-monster')

// const { postgresql } = require('./database');

// // Player
// const Player = new graphql.GraphQLObjectType({
//     name: 'Player',
//     fields: () => ({
//       id: { type: graphql.GraphQLString },
//       first_name: { type: graphql.GraphQLString },
//       last_name: { type: graphql.GraphQLString },
//       team: {
//         type: Team,
//         sqlJoin: (playerTable, teamTable, args) => `${playerTable}.team_id = ${teamTable}.id`
//       }
//     })
//   });
      
//   Player._typeConfig = {
//     sqlTable: 'player',
//     uniqueKey: 'id',
//   }
  
//   // Team
//   var Team = new graphql.GraphQLObjectType({
//     name: 'Team',
//     fields: () => ({
//       id: { type: graphql.GraphQLInt },
//       name: { type: graphql.GraphQLString },
//       players: {
//         type: graphql.GraphQLList(Player),
//         sqlJoin: (teamTable, playerTable, args) => `${teamTable}.id = ${playerTable}.team_id`
//      }
//     })
//   })
      
//   Team._typeConfig = {
//     sqlTable: 'team',
//     uniqueKey: 'id'
//   }

// const QueryRoot = new graphql.GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//       hello: {
//         type: graphql.GraphQLString,
//         resolve: () => "Hello world!"
//       },
//       players: {
//         type: new graphql.GraphQLList(Player),
//         resolve: (parent, args, context, resolveInfo) => {
//           return joinMonster.default(resolveInfo, {}, sql => {
//             return postgresql.query(sql)
//           })
//         }
//       },
//       player: {
//         type: Player,
//         args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
//         where: (playerTable, args, context) => `${playerTable}.id = ${args.id}`,
//         resolve: (parent, args, context, resolveInfo) => {
//           return joinMonster.default(resolveInfo, {}, sql => {
//             return postgresql.query(sql)
//           })
//        }
//       },
//      //...
//     })
//   })

//   const MutationRoot = new graphql.GraphQLObjectType({
//     name: 'Mutation',
//     fields: () => ({
//       player: {
//         type: Player,
//         args: {
//           first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
//           last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
//           team_id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) },
//         },
//         resolve: async (parent, args, context, resolveInfo) => {
//           try {
//             return (await postgresql.query("INSERT INTO player (first_name, last_name, team_id) VALUES ($1, $2, $3) RETURNING *", [args.first_name, args.last_name, args.team_id])).rows[0]
//           } catch (err) {
//             throw new Error("Failed to insert new player")
//           }
//         }
//       }
//     })
//   })

// const schema = new graphql.GraphQLSchema({ query: QueryRoot, mutation: MutationRoot });
// ///

// module.exports = { schema };

