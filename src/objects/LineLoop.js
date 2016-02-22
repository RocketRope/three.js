/**
 * @author
 */

THREE.LineLoop = function ( geometry, material ) {

	THREE.Line.call( this, geometry, material );

	this.type = 'LineLoop';

};

THREE.LineLoop.prototype = Object.create( THREE.Line.prototype );
THREE.LineLoop.prototype.constructor = THREE.LineLoop;
