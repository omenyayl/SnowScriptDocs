import './lib/dts/serverAPI';

/* BEGIN SCRIPT */

var now = new GlideDateTime();

var overdueTasks = new GlideRecord('x_58872_needit_needit_task');
overdueTasks.addQuery('due_date', '<=', now);
overdueTasks.addQuery('state', '!=', 3);
overdueTasks.query();

while (overdueTasks.next()) {
	gs.info('Overdue NeedIt record: ' + overdueTasks.getValue('short_description') + ' due by ' + overdueTasks.getValue('due_date'));
	gs.eventQueue('x_58872_needit.overdueNeedItTask', overdueTasks, overdueTasks.getValue('short_description'), overdueTasks.getValue('due_date'));
}

