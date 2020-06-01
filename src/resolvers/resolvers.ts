import { UserQuery, UserMutation } from "./user.resolver";
import {ProjectQuery, ProjectMutation} from "./project.resolver";
import {CanvasQuery, CanvasMutation} from "./canvas.resolver";
import {PatternQuery, PatternMutation} from "./pattern.resolver";
import {NestedFields} from "./nested/nestedFields";
import {TableQuery, TableMutation} from "./table.resolver";
import {CompanyQuery, CompanyMutation} from "./company.resolver";

const Query = {
    ...UserQuery,
    ...ProjectQuery,
    ...CanvasQuery,
    ...PatternQuery,
    ...TableQuery,
    ...CompanyQuery
}

const Mutation = {
    ...UserMutation,
    ...ProjectMutation,
    ...CanvasMutation,
    ...PatternMutation,
    ...TableMutation,
    ...CompanyMutation

}

// const Subscription = {
//
//}

export const Resolver = {
    Query,
    Mutation,
    // Subscription,
    ...NestedFields
};
