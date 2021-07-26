function getReaPow() {
	let pow = new ExpantaNum(1);
	if (player.tr.upgrades.includes(5) && !HCCBA("noTRU")) pow = pow.times(1.1);
	return pow
}

function getFreeRea() {
	return new ExpantaNum(0)
}

function getReaEff() {
	if (!(player.rea instanceof ExpantaNum)) {
		player.rea=new ExpantaNum(player.rea)
	}
	let rea = player.rea;
	eff=rea.root(1.9)
	return eff
}

function updateTempRea() {
	if (!(player.rea instanceof ExpantaNum)) {
		player.rea=new ExpantaNum(player.rea)
	}
	if (!tmp.rea) tmp.rea = {};
	tmp.rea.bc = new ExpantaNum(10000);
	if (modeActive("extreme")) tmp.rea.bc = new ExpantaNum(8);
	tmp.rea.fp = new ExpantaNum(1);
	tmp.rea.req = tmp.rea.bc.times(ExpantaNum.pow(10, player.rea.div(tmp.rea.fp).pow(1.1))).round();
	tmp.rea.bulk = player.rockets
		.div(tmp.rea.bc)
		.max(1)
		.logBase(10)
		.pow(1 / 1.1)
		.times(tmp.rea.fp)
		.add(1)
		.floor();
	if (scalingActive("rea", player.rea.max(tmp.rea.bulk), "scaled")) {
		let start = getScalingStart("scaled", "rea");
		let power = getScalingPower("scaled", "rea");
		let exp = ExpantaNum.pow(2, power);
		tmp.rea.req = tmp.rea.bc
			.times(
				ExpantaNum.pow(
					10,
					player.rea
						.pow(exp)
						.div(start.pow(exp.sub(1)))
						.div(tmp.rea.fp)
						.pow(1.1)
				)
			)
			.round();
		tmp.rea.bulk = player.rockets
			.div(tmp.rea.bc)
			.max(1)
			.logBase(10)
			.pow(1 / 1.1)
			.times(tmp.rea.fp)
			.times(start.pow(exp.sub(1)))
			.pow(exp.pow(-1))
			.plus(1)
			.floor();
	}
	if (scalingActive("rea", player.rea.max(tmp.rea.bulk), "superscaled")) {
		let start2 = getScalingStart("superscaled", "rea");
		let power2 = getScalingPower("superscaled", "rea");
		let exp2 = ExpantaNum.pow(3, power2);
		let start = getScalingStart("scaled", "rea");
		let power = getScalingPower("scaled", "rea");
		let exp = ExpantaNum.pow(2, power);
		tmp.rea.req = tmp.rea.bc
			.times(
				ExpantaNum.pow(
					10,
					player.rea
						.pow(exp2)
						.div(start2.pow(exp2.sub(1)))
						.pow(exp)
						.div(start.pow(exp.sub(1)))
						.div(tmp.rea.fp)
						.pow(1.1)
				)
			)
			.round();
		tmp.rea.bulk = player.rockets
			.div(tmp.rea.bc)
			.max(1)
			.logBase(10)
			.pow(1 / 1.1)
			.times(tmp.rea.fp)
			.times(start.pow(exp.sub(1)))
			.pow(exp.pow(-1))
			.times(start2.pow(exp2.sub(1)))
			.pow(exp2.pow(-1))
			.plus(1)
			.floor();
	}
	if (scalingActive("rea", player.rea.max(tmp.rea.bulk), "hyper")) {
		let start3 = getScalingStart("hyper", "rea");
		let power3 = getScalingPower("hyper", "rea");
		let base3 = ExpantaNum.pow(1.01, power3);
		let start2 = getScalingStart("superscaled", "rea");
		let power2 = getScalingPower("superscaled", "rea");
		let exp2 = ExpantaNum.pow(3, power2);
		let start = getScalingStart("scaled", "rea");
		let power = getScalingPower("scaled", "rea");
		let exp = ExpantaNum.pow(2, power);
		tmp.rea.req = tmp.rea.bc
			.times(
				ExpantaNum.pow(
					10,
					ExpantaNum.pow(base3, player.rea.sub(start3))
						.times(start3)
						.pow(exp2)
						.div(start2.pow(exp2.sub(1)))
						.pow(exp)
						.div(start.pow(exp.sub(1)))
						.div(tmp.rea.fp)
						.pow(1.1)
				)
			)
			.round();
		tmp.rea.bulk = player.rockets
			.div(tmp.rea.bc)
			.max(1)
			.logBase(10)
			.pow(1 / 1.1)
			.times(tmp.rea.fp)
			.times(start.pow(exp.sub(1)))
			.pow(exp.pow(-1))
			.times(start2.pow(exp2.sub(1)))
			.pow(exp2.pow(-1))
			.div(start3)
			.max(1)
			.logBase(base3)
			.add(start3)
			.plus(1)
			.floor();
	}
	if (scalingActive("rea", player.rea.max(tmp.rea.bulk), "atomic")) {
		let start4 = getScalingStart("atomic", "rea");
		let power4 = getScalingPower("atomic", "rea");
		let exp4 = ExpantaNum.pow(4, power4);
		let start3 = getScalingStart("hyper", "rea");
		let power3 = getScalingPower("hyper", "rea");
		let base3 = ExpantaNum.pow(1.01, power3);
		let start2 = getScalingStart("superscaled", "rea");
		let power2 = getScalingPower("superscaled", "rea");
		let exp2 = ExpantaNum.pow(3, power2);
		let start = getScalingStart("scaled", "rea");
		let power = getScalingPower("scaled", "rea");
		let exp = ExpantaNum.pow(2, power);
		tmp.rea.req = tmp.rea.bc
			.times(
				ExpantaNum.pow(
					10,
					ExpantaNum.pow(
						base3,
						player.rea
							.pow(exp4)
							.div(start4.pow(exp4.sub(1)))
							.sub(start3)
					)
						.times(start3)
						.pow(exp2)
						.div(start2.pow(exp2.sub(1)))
						.pow(exp)
						.div(start.pow(exp.sub(1)))
						.div(tmp.rea.fp)
						.pow(1.1)
				)
			)
			.round();
		tmp.rea.bulk = player.rockets
			.div(tmp.rea.bc)
			.max(1)
			.logBase(10)
			.pow(1 / 1.1)
			.times(tmp.rea.fp)
			.times(start.pow(exp.sub(1)))
			.pow(exp.pow(-1))
			.times(start2.pow(exp2.sub(1)))
			.pow(exp2.pow(-1))
			.div(start3)
			.max(1)
			.logBase(base3)
			.add(start3)
			.times(start4.pow(exp4.sub(1)))
			.pow(exp4.pow(-1))
			.plus(1)
			.floor();
	}

	tmp.rea.can = player.rockets.gte(tmp.rea.req);
	if (extremeStadiumActive("aqualon", 2)) tmp.rea.can = false
	tmp.rea.layer = new Layer("rea", tmp.rea.can, "semi-forced");
	if (!tmp.rea.onReset) tmp.rea.onReset = function (prev) {
		player.rockets = player.rockets.sub(tmp.rea.req);
	};
	if (!tmp.rea.updateOnReset) tmp.rea.updateOnReset = function() { updateTempRF(); }
}
