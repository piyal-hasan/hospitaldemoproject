<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\HotelInvoiceMail;
use Mail;

class HotelInvoiceSender implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $data;

    public function __construct($data)
    {
        $this->data=$data;
      
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new HotelInvoiceMail($this->data);
        Mail::to($this->data['customer_email'])->send($email);
    }
}
