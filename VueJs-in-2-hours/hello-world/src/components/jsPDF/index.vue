<template>
	<div class="jspdf-main">
		<div class="content template-area" id="capture">
			<div class="template-header template-children__margin">
				<h1>お見積もり書+様</h1>
				<hr />
				<div class="header-table">
					<div class="h-table__left">
						<table>
							<tr>
								<td colspan="2"></td>
							</tr>
							<tr class="border__bottom">
								<td
									class="
										text-align__left
										font-size__large
										border__bottom
									"
									colspan="2"
								>
									<p>取引先名+様</p>
								</td>
							</tr>
							<tr>
								<td class="text-align__right" colspan="2">
									下記の通りお見積もり申し上げます。
								</td>
							</tr>
							<tr>
								<td></td>
							</tr>
							<tr>
								<td>案件名：</td>
								<td class="text-align__left border__bottom">
									ロゴデータ作成
								</td>
							</tr>
							<tr v-for="n in 4" :key="n">
								<td></td>
							</tr>
							<tr class="font-size__large">
								<td class="border__bottom">金額</td>
								<td class="border__bottom">¥11,000(税込)</td>
							</tr>
						</table>
					</div>
					<div class="h-table__right">
						<table>
							<tr>
								<td>発行日:</td>
								<td class="text-align__right" colspan="3">
									2021-07-31
								</td>
								<td></td>
							</tr>
							<tr>
								<td>ページ：</td>
								<td class="text-align__right" colspan="3">1</td>
								<td></td>
							</tr>
							<tr v-for="n in 3" :key="n">
								<td></td>
							</tr>

							<tr>
								<td class="text-align__left" colspan="5">
									〒465-0051
								</td>
							</tr>
							<tr>
								<td class="text-align__left" colspan="5">
									愛知県名古屋市名東区社が丘1-1605
								</td>
							</tr>
							<tr>
								<td class="text-align__left" colspan="5">
									株式会社 CROSS
								</td>
							</tr>
							<tr>
								<td></td>
								<td>TEL：</td>
								<td class="text-align__left" colspan="3">
									052-702-0066
								</td>
							</tr>
							<tr>
								<td></td>
								<td>担当：</td>
								<td class="text-align__left" colspan="3">青木真弓</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="header-seal">
					<img src="./image.png" alt="company seal" />
				</div>
			</div>
			<div class="template-body template-children__margin">
				<div class="body-table">
					<table>
						<tr>
							<th colspan="8">品目</th>
							<th colspan="2">数 量</th>
							<th colspan="2">単 価</th>
							<th colspan="2">金 額</th>
						</tr>
						<tr></tr>
						<tr>
							<td colspan="8"></td>
							<td>1</td>
							<td>式</td>
							<td colspan="2">¥10,000</td>
							<td colspan="2">¥10,000</td>
						</tr>
						<tr v-for="n in 17" :key="n">
							<td colspan="8"></td>
							<td></td>
							<td></td>
							<td colspan="2"></td>
							<td colspan="2"></td>
						</tr>
						<tr class="hide-row">
							<td v-for="n in 14" :key="n"></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="template-footer template-children__margin"></div>
		</div>
		<button @click="createPDF" type="button">Create pdf</button>
	</div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default {
	methods: {
		createPDF() {
			// html2canvas(document.querySelector('#capture'), {
			// 	allowTaint: true,
			// 	useCORS: true,
			// 	scale: 1,
			// }).then((canvas) => {
			// 	document.body.appendChild(canvas);
			// 	let doc = new jspdf();
			// 	let img = canvas.toDataURL('image/png');
			// 	doc.setFont('Arial');
			// 	doc.getFontSize(11);
			// 	doc.addImage(img, 'PNG', 7, 13, 195, 105);
			// 	doc.save();
			// });

			window.html2canvas = html2canvas;
			var doc = new jsPDF(1, 'pt', 'a4');
			// doc.setFont(fontOptions);
			// doc.getFontSize(110);
			doc.html(document.querySelector('#capture'), {
				callback: function(pdf) {
					pdf.save('template.pdf');
				},
			});
		},
	},
};
</script>

<style>
table,
tr,
td {
	border-collapse: collapse;
}

table {
	width: 100%;
}

td {
	height: 15px;
}

hr {
	height: 2px;
	border-width: 0;
	color: black;
	background-color: black;
}

img {
	width: 80%;
}

td.border__bottom {
	border-bottom: 1px solid black;
}

.template-area {
	height: 130vh;
	width: 800px;
	border: 2px solid black;
	padding: 3vh 3vw;
	position: relative;
}

.template-children__margin {
	margin: 2vh 0;
}

.header-table {
	display: grid;
	grid-template-columns: 55% 45%;
}

.h-table__right {
	margin-left: 4vw;
}

.text-align__right {
	text-align: right;
}

.text-align__left {
	text-align: left;
}

.font-size__large {
	font-size: 1.5em;
}

.h-table__right td {
	width: 20%;
}

.header-seal {
	position: absolute;
	right: 1vw;
	top: 27vh;
}

.body-table td,
th {
	border: 1px solid black;
	width: 7.1%;
	height: 25px;
}

.hide-row td {
	border: none;
}
</style>
