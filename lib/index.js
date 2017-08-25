"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { and, hasDefaultMember, hasNamedMembers, hasNamespaceMember, hasNoMember, hasOnlyDefaultMember, hasOnlyNamedMembers, hasOnlyNamespaceMember, isAbsoluteModule, isRelativeModule, member, name, not, startsWithAlphanumeric, startsWithLowerCase, startsWithUpperCase, unicode, } = styleApi;
    return [
        { match: and(hasNoMember, isAbsoluteModule) },
        { match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasOnlyNamespaceMember, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasOnlyNamespaceMember, isAbsoluteModule, member(startsWithLowerCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isAbsoluteModule, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isAbsoluteModule, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyDefaultMember, isAbsoluteModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasOnlyDefaultMember, isAbsoluteModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasOnlyDefaultMember, isAbsoluteModule, member(startsWithLowerCase)), sort: member(unicode) },
        { separator: true },
        { match: and(hasNoMember, isRelativeModule) },
        { match: and(hasOnlyNamespaceMember, isRelativeModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasOnlyNamespaceMember, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasOnlyNamespaceMember, isRelativeModule, member(startsWithLowerCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isRelativeModule, not(member(startsWithAlphanumeric))), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyNamedMembers, isRelativeModule, member(startsWithLowerCase)), sort: member(unicode), sortNamedMembers: name(unicode) },
        { match: and(hasOnlyDefaultMember, isRelativeModule, not(member(startsWithAlphanumeric))), sort: member(unicode) },
        { match: and(hasOnlyDefaultMember, isRelativeModule, member(startsWithUpperCase)), sort: member(unicode) },
        { match: and(hasOnlyDefaultMember, isRelativeModule, member(startsWithLowerCase)), sort: member(unicode) },
        { separator: true },
    ];
}
exports.default = default_1;
