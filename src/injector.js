"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
require("reflect-metadata");
// Simple Injectable decorator.
var Injectable = function () {
    return function (target) {
        console.log('[Injectable]', target.name, Reflect.getMetadata('design:paramtypes', target));
    };
};
exports.Injectable = Injectable;
/**
* CRUD Service for CRUD operations against BE / DB
*/
var CrudService = function () {
    var _classDecorators = [(0, exports.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CrudService = _classThis = /** @class */ (function () {
        function CrudService_1() {
        }
        CrudService_1.prototype.getData = function (entity) {
            return "Some Data from -> ".concat(entity);
        };
        return CrudService_1;
    }());
    __setFunctionName(_classThis, "CrudService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CrudService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CrudService = _classThis;
}();
/**
* Service to retrieve/crate/update comments
*/
var CommentsService = /** @class */ (function () {
    function CommentsService(crudService) {
        this.crudService = crudService;
    }
    CommentsService.prototype.getComments = function () {
        return this.crudService.getData('/comments');
    };
    return CommentsService;
}());
/**
* Service to retrieve/crate/update comments
*/
var MoviesService = /** @class */ (function () {
    function MoviesService(commentsService, crudService) {
        this.commentsService = commentsService;
        this.crudService = crudService;
    }
    MoviesService.prototype.getMovies = function () {
        return this.crudService.getData('/movies');
    };
    MoviesService.prototype.getComments = function () {
        return this.commentsService.getComments();
    };
    return MoviesService;
}());
var movies = new MoviesService(new CommentsService(new CrudService()), new CrudService());
console.log(movies.getComments());
console.log(movies.getMovies());
