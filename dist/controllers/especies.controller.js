"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultEspecies = exports.updateEspecie = exports.deleteEspecieById = exports.countEspecies = exports.getEspecieById = exports.createEspecie = exports.getEspecies = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

//Funcion para obtener datos de todas las especies
var getEspecies = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _models.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_models.queries.getEspecies);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getEspecies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Funcion para crear un nuevo registro de especie


exports.getEspecies = getEspecies;

var createEspecie = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, familia, nombre_especie, cantidad, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, familia = _req$body.familia, nombre_especie = _req$body.nombre_especie, cantidad = _req$body.cantidad;

            if (!(familia === null || nombre_especie == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "Debe indicar el nombre de la familia y la especie"
            }));

          case 3:
            if (!cantidad) cantidad = 0;
            _context2.prev = 4;
            _context2.next = 7;
            return (0, _models.getConnection)();

          case 7:
            pool = _context2.sent;
            _context2.next = 10;
            return pool.request().input("familia", _models.sql.VarChar, familia).input("nombre_especie", _models.sql.VarChar, nombre_especie).input("cantidad", _models.sql.Int, cantidad).query(_models.queries.createEspecie);

          case 10:
            res.json({
              familia: familia,
              nombre_especie: nombre_especie,
              cantidad: cantidad
            });
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](4);
            res.status(500);
            res.send(_context2.t0.message);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 13]]);
  }));

  return function createEspecie(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Obtener datos de una especie por id


exports.createEspecie = createEspecie;

var getEspecieById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _models.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("id_especie", req.params.id_especie).query(_models.queries.getEspecieById);

          case 6:
            result = _context3.sent;
            return _context3.abrupt("return", res.json(result.recordset[0]));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function getEspecieById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Contar especies en la lista


exports.getEspecieById = getEspecieById;

var countEspecies = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _models.getConnection)();

          case 2:
            pool = _context4.sent;
            _context4.next = 5;
            return pool.request().query(_models.queries.countEspecies);

          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", res.json(result.recordset[0][""]));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function countEspecies(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Eliminar una especie de la lista por id


exports.countEspecies = countEspecies;

var deleteEspecieById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _models.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input("id_especie", req.params.id_especie).query(_models.queries.deleteEspecieById);

          case 6:
            result = _context5.sent;

            if (!(result.rowsAffected[0] === 0)) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.sendStatus(404));

          case 9:
            return _context5.abrupt("return", res.send("Se eliminó correctamente").sendStatus(204));

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function deleteEspecieById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //Actualizar info de una especie, obteniendola por ID


exports.deleteEspecieById = deleteEspecieById;

var updateEspecie = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, familia, nombre_especie, cantidad, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, familia = _req$body2.familia, nombre_especie = _req$body2.nombre_especie, cantidad = _req$body2.cantidad;

            if (!(!familia || !nombre_especie || !cantidad)) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: "Debe indicar familia, nombre y cantidad"
            }));

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return (0, _models.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input("familia", _models.sql.VarChar, familia).input("nombre_especie", _models.sql.VarChar, nombre_especie).input("cantidad", _models.sql.Int, cantidad).input("id_especie", req.params.id_especie).query(_models.queries.updateEspecie);

          case 9:
            res.json({
              familia: familia,
              nombre_especie: nombre_especie,
              cantidad: cantidad
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](3);
            res.status(500);
            res.send(_context6.t0.message);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 12]]);
  }));

  return function updateEspecie(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateEspecie = updateEspecie;

var defaultEspecies = function defaultEspecies(req, res) {
  return res.send('Error 404 | La ruta indicada no existe en esta API');
};

exports.defaultEspecies = defaultEspecies;