// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Billing Information', {
	// refresh: function(frm) {
		before_load(frm){
			frappe.msgprint("⚠️ Please Fill All the Details ⚠️");
			
		}
	// }
});
